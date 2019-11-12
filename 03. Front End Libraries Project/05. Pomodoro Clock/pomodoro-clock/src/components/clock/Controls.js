import React from 'react';

function Controls(props) {
    return(
        <div id="section-controls">
                <div id="start_stop" onClick={props.controlStart}>start</div>
                <div id="reset" onClick={props.controlReset}>Reset</div>
        </div>
    )
}

export default Controls;