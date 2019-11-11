import React from 'react';
import DrumMachine from './components/drum/DrumMachine';
import Display from './components/drum/Display';
import Entry from './components/social/Entry';
import Viewer from './components/social/Viewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Viewer />
      {/* <Display />
      <DrumMachine /> */}
      {/* <audio src="http://soundbible.com/mp3/horse_blow-stephan_schutze-1678740304.mp3" controls>Asdf</audio>
      <audio src="http://soundbible.com/mp3/horse_blow-stephan_schutze-1678740304.mp3" controls>Asdf</audio> */}
    </div>
  );
}

export default App;
