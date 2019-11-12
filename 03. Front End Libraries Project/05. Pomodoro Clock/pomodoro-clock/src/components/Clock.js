import React from 'react';
import './Clock.css';
import Break from './clock/Break';
import Controls from './clock/Controls';
import Session from './clock/Session';
import Timer from './clock/Timer';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "length_session": this.props.length_session,
            "length_break": this.props.length_break,
            "session": true
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
        this.setState({"length_break": length_break});
    }

    updateSession = (e) => {
        let btn = e.currentTarget.getAttribute("value");
        let length_session = +this.state.length_session;
        if(btn === "+" && length_session < 60) {
            length_session += 1;
        } else if (btn === "-" && length_session > 0) {
            length_session -= 1;
        }
        this.setState({"length_session": length_session});
    }

    controlStart = (e) => {}
    controlReset = (e) => {
        this.setState({
            "length_session": this.props.length_session,
            "length_break": this.props.length_break,
            "status": "session"
        })
    }
    
    render() {
        return(
            <div>
                <Break length_break={this.state.length_break} updateBreak={this.updateBreak} />
                <Session length_session={this.state.length_session} updateSession={this.updateSession} />
                <Timer session={this.state.session} length_session={this.state.length_session} length_break={this.state.length_break}/>
                <Controls controlStart={this.controlStart} controlReset={this.controlReset}/>
            </div>
        )
    }

}

export default Clock;