import React from 'react';
import './Clock.css';
const AUDIO_ID = "beep";

const DEFAULT = {
    "break_length": 5,
    "session_length": 25,
    "timer": 1500,
    "active_state": "Session",
    "active": false,
    "setInterval": null,
    "string_start": "Start"
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...DEFAULT};
    }

    switchTimer = (num, str) => {
        const AUDIO = document.getElementById("beep");
        AUDIO.play();
       this.setState({
           "timer": num,
           "active_state": str
       })
    }

    updateTimer = () => {
        let timer = this.state.timer - 1;
        this.setState({
          "timer": timer
        })

        if(timer < 0) {
            if(this.state.active_state === 'Session') {
                clearInterval(this.state.setInterval);
                this.startTimer();
                this.switchTimer(this.state.break_length * 60, 'Break');
        
            } else {
                clearInterval(this.state.setInterval);
                this.startTimer();
                this.switchTimer(this.state.session_length * 60, 'Session');
            }
                
        }
    }
    
    startTimer = () => {
        this.setState({
            "setInterval": setInterval(this.updateTimer, 1000)
        })
    }

    clickStart = (e) => {
        let active = !this.state.active;
        this.setState({
            "active": active,
            "string_start": active ? "Pause" : "Start",
            "setInterval": active ? setInterval(this.updateTimer, 1000) : clearInterval(this.state.setInterval)
        })
    }

    clickReset = () => {
        const AUDIO = document.getElementById(AUDIO_ID);
        AUDIO.pause();
        AUDIO.currentTime = 0;
        this.killTimer();
        this.setState({
            "break_length": DEFAULT.break_length,
            "session_length": DEFAULT.session_length,
            "timer": 1500,
            "active_state": "Session",
            "active": false,
            "setInterval": null,
            "string_start": "Start"
        })
    }

    updateSession = (e) => {
        let length = this.state.session_length;
        let active_state = this.state.active_state;
        let active = this.state.active;

        if(active === true) return;
        if(e.currentTarget.getAttribute("btn") === "+" && length != 60) { // increment
            length += 1;
        } else if(e.currentTarget.getAttribute("btn") === "-" && length != 1) { // decrement
            length -= 1;
        }    
        this.setState({"session_length": length});
        if(active_state === "Session") {
            this.setState({"timer": length * 60});    
        }
    }

    updateBreak = (e) => {
        let length = this.state.break_length;
        let active_state = this.state.active_state;
        let active = this.state.active;

        if(active === true) return;
        if(e.currentTarget.getAttribute("btn") === "+" && length != 60) { // increment
            length += 1;
        } else if(e.currentTarget.getAttribute("btn") === "-" && length != 1) { // decrement
            length -= 1;
        }        
        this.setState({"break_length": length})
        if(active_state === "Break") {
            this.setState({"timer": length * 60})
        }
    }

    killTimer() {
        clearInterval(this.state.setInterval);
    }

    displayTime(secs) {
        let minutes = Math.floor(secs/60);
        let seconds = secs % 60;
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        } else {
            
        }
        return minutes + ":" + seconds;
    }

    render() {
        return(
            <div id="calculator">
                <div id="section-timer">
                    <div id="timer-label" className="header">{this.state.active_state}</div>
                    <div id="time-left">{this.displayTime(this.state.timer)}</div>
                    <audio id="beep" src="http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3">Sorry, your browser does not support the audio</audio>
                </div>

                <div id="section-controls">
                    <span id="start_stop" className="controls" onClick={this.clickStart}>{this.state.string_start}</span>
                    <span id="reset" className="controls" reset="hard" onClick={this.clickReset}>Reset</span>
                </div>
                <div id="section-session" className="section">
                    <div className="header" id="session-label">Session Length</div>
                    <div id="session-length">{this.state.session_length}</div>
                    <div className="slider-box">
                        <span id="session-decrement" btn="-" className="element btn left" onClick={this.updateSession}>-</span>
                        <span id="session-increment" btn="+" className="element btn right" onClick={this.updateSession}>+</span>
                    </div>
                </div>
                <div id="section-break" className="section">
                    <div className="header" id="break-label">Break Length</div>
                    <div id="break-length">{this.state.break_length}</div>
                    <div className="slider-box">
                        <span id="break-decrement" btn="-" className="element btn left" onClick={this.updateBreak}>-</span>
                        <span id="break-increment" btn="+" className="element btn right" onClick={this.updateBreak}>+</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Clock;