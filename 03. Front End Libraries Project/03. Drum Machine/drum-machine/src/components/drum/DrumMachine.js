import React from 'react';
import DrumPad from './DrumPad';


class DrumMachine extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return(
        <div id="drum-machine">
            <div id="display">
                <DrumPad id="q"/>
                <DrumPad id="w"/>
                <DrumPad id="e"/>
                <DrumPad id="a"/>
                <DrumPad id="s"/>
                <DrumPad id="d"/>
                <DrumPad id="z"/>
                <DrumPad id="x"/>
                <DrumPad id="c"/>
            </div>
        </div>
        )};
}

export default DrumMachine;