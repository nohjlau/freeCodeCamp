import React from 'react';

function Timer(props) {

    function timeToTime(minutes) {
        let time = new Date(null);
        time.setSeconds(minutes*60);
        time = time.toISOString().substr(14,5);
        return time;
    }

    return (
        <div id="section-timer">
                <div id="timer-label">Session</div>
                <div id="time-left">{timeToTime(props.session ? props.length_session : props.length_break)}</div>
        </div>
    )
}

export default Timer;