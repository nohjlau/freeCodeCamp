import React from 'react';
import Clock from './components/Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock length_session="25" length_break="5"/>
    </div>
  );
}

export default App;
