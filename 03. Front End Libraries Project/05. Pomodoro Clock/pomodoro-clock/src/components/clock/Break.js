import React from 'react';

function Break(props) {
    return (
        <div id="section-break">
                <div id="break-label">Break Length</div>
                <div id="break-length">{props.length_break}</div>
                <div id="break-increment" value="+" onClick={props.updateBreak}>+</div>
                <div id="break-decrement" value="-" onClick={props.updateBreak}>-</div>
        </div>
    )
}

export default Break;