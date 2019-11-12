import React from 'react';
import './Controls.css';

function Controls(props) {
    return(
        <div id="section-controls">
                <span className="btn" id="start_stop" onClick={props.controlStart}>{props.btnStart}</span>
                <span className="btn" id="reset" onClick={props.controlReset}>Reset</span>
        </div>
    )
}

export default Controls;