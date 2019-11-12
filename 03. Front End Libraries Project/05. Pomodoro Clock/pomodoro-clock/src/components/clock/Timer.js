import React from 'react';

function Timer(props) {

    function timeToTime(seconds) {
        let time = new Date(null);
        time.setSeconds(seconds);
        time = time.toISOString().substr(14,5);
        return time;
    }

    return (
        <div id="section-timer">
                <div id="timer-label">Session</div>
                <div id="time-left">{timeToTime(props.session ? props.timer_session : props.timer_break)}</div>
        </div>
    )
}

export default Timer;