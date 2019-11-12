import React from 'react';
import './Session.css';

function Session(props) {
    return(
        <div id="section-session">
                <div id="session-label">Session Length</div>
                <div id="session-length">{props.length_session}</div>
                <div id="session-increment" value="+" onClick={props.updateSession}>+</div>
                <div id="session-decrement" value="-" onClick={props.updateSession}>-</div>
        </div>
    )
}

export default Session;