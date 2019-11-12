import React from 'react';
import './Clock.css';
import Break from './clock/Break';
import Controls from './clock/Controls';
import Session from './clock/Session';
import Timer from './clock/Timer';

const SECONDS_TO_MINUTES = 60;
const AUDIO_ID = "beep";
const DEFAULT = {
    "length_session": 25,
    "length_break": 5,
    "timer_session": 25*SECONDS_TO_MINUTES,
    "timer_break": 5*SECONDS_TO_MINUTES,
    "session": true,
    "started": false,
    "active": false,
    "btnStart": "Start",
    "label-timer": "Session"
    
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "length_session": DEFAULT.length_session,
            "length_break": DEFAULT.length_break,
            "timer_session": DEFAULT.timer_session,
            "timer_break": DEFAULT.timer_break,
            "session": DEFAULT.session,
            "started": DEFAULT.started,
            "active": DEFAULT.active,
            "timer_interval": null,
            "btnStart": DEFAULT.btnStart,
            "label-timer": DEFAULT["label-timer"],
        }

    }

    updateBreak = (e) => {
        let btn = e.currentTarget.getAttribute("value");
        let length_break = +this.state.length_break;
        if(btn === "+" && length_break < 60) {
            length_break += 1;
        } else if (btn === "-" && length_break > 0) {
            length_break -= 1;
        }
        this.setState({
            "length_break": length_break,
            "timer_break": this.state.started ? this.state.timer_break : length_break*SECONDS_TO_MINUTES
        });
    }

    updateSession = (e) => {
        let btn = e.currentTarget.getAttribute("value");
        let length_session = +this.state.length_session;
        if(btn === "+" && length_session < 60) {
            length_session += 1;
        } else if (btn === "-" && length_session > 0) {
            length_session -= 1;
        }
        this.setState({
            "length_session": length_session,
            "timer_session": this.state.started ? this.state.timer_session : length_session*SECONDS_TO_MINUTES,
        });
    }

    updateTime = () => {
        const AUDIO = document.getElementById(AUDIO_ID);

        if(this.state.active && this.state.timer_session <= 0 && this.state.session) {
            AUDIO.play();
            this.setState({
                "session": false
            })
        }
        if(this.state.active && this.state.timer_session <= 0 && this.state.timer_break <= 0) {
            AUDIO.play();
            this.softReset();
        }
        if(this.state.active) {
            this.setState({
                "label-timer": this.state.session ? "Session" : "Break"
            })
            if(this.state.session) {
                this.setState({
                    "timer_session": +this.state.timer_session -1,
                })
            } else {
                this.setState({
                    "timer_break": +this.state.timer_break -1
                })
            }
        }
    }

    softReset = () => {
        clearInterval(this.state.timer_interval);
        this.setState({
            "timer_session": this.state.length_session*SECONDS_TO_MINUTES,
            "timer_break": this.state.length_break*SECONDS_TO_MINUTES,
            "session": true,
            "timer_interval": setInterval(this.updateTime, 1000),
            "label-timer": DEFAULT["label-timer"],
        });
    }

    controlStart = (e) => {
        let active = !this.state.active;
        this.setState({
            "started": true,
            "active": active,
            "timer_interval": active ? setInterval(this.updateTime, 1000) : clearInterval(this.state.timer_interval),
            "btnStart": active ? "Pause" : "Start"
        });        
        
    }

    controlReset = (e) => {
        const AUDIO = document.getElementById(AUDIO_ID);
        AUDIO.pause();
        AUDIO.currentTime = 0;

        clearInterval(this.state.timer_interval);
        
        this.setState({
            "length_session": DEFAULT.length_session,
            "length_break": DEFAULT.length_break,
            "timer_session": DEFAULT.timer_session,
            "timer_break": DEFAULT.timer_break,
            "session": DEFAULT.session,
            "started": DEFAULT.started,
            "active": DEFAULT.active,
            "timer_interval": null,
            "btnStart": DEFAULT.btnStart,
            "label-timer": DEFAULT["label-timer"],
        });
    }
    
    render() {
        return(
            <div id="clock">
                <Break length_break={this.state.length_break} updateBreak={this.updateBreak} />
                <Session length_session={this.state.length_session} updateSession={this.updateSession} />
                <Timer active={this.state.active} session={this.state.session} label_timer={this.state["label-timer"]} timer_session={this.state.timer_session} timer_break={this.state.timer_break}/>
                <Controls btnStart={this.state.btnStart} controlStart={this.controlStart} controlReset={this.controlReset}/>
            </div>
        )
    }

}

export default Clock;