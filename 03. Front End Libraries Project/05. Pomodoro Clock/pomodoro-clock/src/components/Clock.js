import React from 'react';
import './Clock.css';
import Break from './clock/Break';
import Controls from './clock/Controls';
import Session from './clock/Session';
import Timer from './clock/Timer';

const SECONDS_TO_MINUTES = 60;
const STARTING_VALUES = {
    "session": true,
    "started": false,
    "active": false
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "length_session": this.props.length_session,
            "length_break": this.props.length_break,
            "timer_session": this.props.length_session*SECONDS_TO_MINUTES,
            "timer_break": this.props.length_break*SECONDS_TO_MINUTES,
            "session": STARTING_VALUES.session,
            "started": STARTING_VALUES.started,
            "active": STARTING_VALUES.active
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
            "timer_session": this.state.started ? this.state.timer_break : length_break*SECONDS_TO_MINUTES
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
    controlStart = (e) => {}
    controlReset = (e) => {
        this.setState({
            "length_session": this.props.length_session,
            "length_break": this.props.length_break,
            "timer_session": this.props.length_session*SECONDS_TO_MINUTES,
            "timer_break": this.props.length_break*SECONDS_TO_MINUTES,
            "session": STARTING_VALUES.session,
            "started": STARTING_VALUES.started,
            "active": STARTING_VALUES.active
        })
    }
    
    render() {
        return(
            <div>
                <Break length_break={this.state.length_break} updateBreak={this.updateBreak} />
                <Session length_session={this.state.length_session} updateSession={this.updateSession} />
                <Timer active={this.state.active} session={this.state.session} timer_session={this.state.timer_session} timer_break={this.state.timer_break}/>
                <Controls controlStart={this.controlStart} controlReset={this.controlReset}/>
            </div>
        )
    }

}

export default Clock;