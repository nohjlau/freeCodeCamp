import React from 'react';
import './Timer.css';

function Timer(props) {

    function timeToTime(secs) {
        let minutes = Math.floor(secs/60);
        let seconds = secs % 60;
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = seconds + "0";
        }
        return minutes + ":" + seconds;
    }

    return (
        <div id="section-timer">
                <span id="timer-label">{props.label_timer}</span>
                <div id="time-left">{timeToTime(props.session ? props.timer_session : props.timer_break)}</div>
                <audio id="beep" src="http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3">Sorry, your browser does not support the audio</audio>
        </div>
    )
}

export default Timer;