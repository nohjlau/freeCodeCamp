import React from 'react';
import Editor from './components/Editor.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={styleH1}>Markdown Previewer</h1>
        <Editor />
      </div>
    )
  };
}

const styleH1 = {
  textAlign: 'center'
}
export default App;
