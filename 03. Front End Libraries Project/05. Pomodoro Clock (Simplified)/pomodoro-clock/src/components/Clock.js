import React from 'react';
import './Clock.css';

const DEBUG = true;
const DEFAULT_SESSION = 25;
const DEFAULT_BREAK = 5;
const MIN_TO_SEC = 60;

const DEFAULT = {
    "length_session": DEFAULT_SESSION,
    "length_break": DEFAULT_BREAK,
    "display_session": DEFAULT_SESSION * MIN_TO_SEC,
    "display_break": DEFAULT_BREAK * MIN_TO_SEC,
    "display_timer": 1,
    "is_active": false,
    "active_session": true,
    "active_break": false,
    "setInterval": null,
    "string_start": "Start",
    "string_timer": "Session"
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...DEFAULT};
    }
    
    displayTime(seconds) {
        if(seconds > 3600) { seconds = 3600;}
        if(seconds < 1) {seconds = 1;}
        var time = new Date(null);
        var MHSTime = "";
        time.setSeconds(seconds);
        if(seconds >= 3600) {
            MHSTime = "00:60:00";
        } else {
            MHSTime = time.toISOString().substr(11,8);
        }
        MHSTime = MHSTime.substr(3, MHSTime.length-1);
        
        return MHSTime;
    }

    clickStart = (e) => {
        let is_active = !this.state.is_active;

        this.setState({"is_active": is_active});
        if(is_active === true) {
            if(DEBUG) {console.log("DEBUG: Active")};
            this.setState({"string_start": "Pause"});
            this.setState({"setInterval": setInterval(this.logicTimer, 1000)});
        } else {
            if(DEBUG) {console.log("DEBUG: Not Active")};
            this.setState({"string_start": "Start"});
            this.killInterval();
        }

    }

    logicTimer = () => {
        let active_session = this.state.active_session;
        let active_break = this.state.active_break;
        let currentTime = 0;
        let display_session = this.state.display_session;
        let display_break = this.state.display_break;

        if(display_session === 0 && active_session) { // Switch to break
            if(DEBUG){console.log("DEBUG: BREAK active")}
            active_session = false;
            active_break = true;
            this.setState({
                "active_session": active_session,
                "active_break": active_break,
                "string_timer": "Break"
            });
            document.getElementById("time-left").innerHTML = this.displayTime(this.state.display_break);
        }
        
        if (active_break) {
            document.getElementById("time-left").innerHTML = this.displayTime(this.state.display_break);
        }
        if (display_break === 0 && active_break) { // RESET softly
            this.softReset();
        }
        
        if(active_session) {
            currentTime = +this.state.display_session;
            this.setState({"display_session": currentTime - 1});
        } else if (active_break) {
            currentTime = +this.state.display_break;
            this.setState({"display_break": currentTime - 1});
        }
        
    }

    softReset = () => {
        this.killInterval();
        let display_session = this.state.length_session * 60;
        let display_break = this.state.length_break * 60;
        if(DEBUG) {console.log("DEBUG: Soft Reset");}
        this.setState({
            "display_session": display_session,
            "display_break": display_break,
            "active_session": true,
            "active_break": false,
            "setInterval": setInterval(this.logicTimer, 1000),
            "string_timer": "Session",
        });
        document.getElementById("time-left").innerHTML = this.displayTime(this.state.display_session);
    }

    clickReset = (e) => {
        if(DEBUG) {console.log("DEBUG: Hard Reset");}
        this.killInterval(); // ALWAYS reset our timer regardless of the reset type
        this.setState({...DEFAULT});
    }

    updateSession = (e) => {
        let length = this.state.length_session;
        let btn = e.currentTarget.getAttribute("btn");

        if (btn === "-" && length > 1) {
            length--;
        }
        if (btn === "+" && length < 60) {
            length++;
        }
        //double check
        if(length > 60) { length = 60; }
        if(length < 1) { length = 1; }

        this.setState({"length_session": length});
        if(this.state.is_active === false) {
            this.setState({"display_session": length*60});
        }
    }

    updateBreak = (e) => {
        let length = this.state.length_break;
        let btn = e.currentTarget.getAttribute("btn");

        
        if (btn === "-" && length > 1) {
            length--;
        } else if (btn === "+" && length < 60) {
            length++;
        }

        if(length < 1) { length = 1; }
        if(length > 60) { length = 60; }
        this.setState({"length_break": length});
        if(this.state.is_active === false) {
            this.setState({"display_break": length*60});
        }
    }

    killInterval = () => {
        clearInterval(this.state.setInterval);
        this.setState({"setInterval": null})
    }

    render() {
        return(
            <div id="calculator">
                <div id="section-timer">
                    <div id="timer-label" className="header">{this.state.string_timer}</div>
                    <div id="time-left">{this.displayTime(this.state.display_session)}</div>
                </div>

                <div id="section-controls">
                    <span id="start_stop" className="controls" onClick={this.clickStart}>{this.state.string_start}</span>
                    <span id="reset" className="controls" reset="hard" onClick={this.clickReset}>Reset</span>
                </div>
                <div id="section-session" className="section">
                    <div className="header" id="session-label">Session Length</div>
                    <div id="session-length">{this.state.length_session}</div>
                    <div className="slider-box">
                        <span id="session-increment" btn="-" className="element btn left" onClick={this.updateSession}>-</span>
                        <span id="session-decrement" btn="+" className="element btn right" onClick={this.updateSession}>+</span>
                    </div>
                </div>
                <div id="section-break" className="section">
                    <div className="header" id="break-label">Break Length</div>
                    <div id="break-length">{this.state.length_break}</div>
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