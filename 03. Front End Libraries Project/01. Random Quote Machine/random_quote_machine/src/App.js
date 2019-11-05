import React, {Component} from 'react';
import QuoteBox from './components/QuoteBox';

import './App.css';
import uuid from 'uuid';
class App extends Component {
  state = {
    quotes: [
      {
        id: 1,
        text: 'If you want to lift yourself up, lift up someone else',
        author: 'Booker T. Washington',
        shown: false
      },
      {
        id: 2,
        text: 'I would rather die of passion than of boredom',
        author: 'Vincent van Gogh',
        shown: false
      },
      {
        id: 3,
        text: 'The best revenge is massive success',
        author: 'Frank Sinatra',
        shown: false
      }
    ]
  };

  render() {
  return (
    <div className="App" >
      <div id="container" >
        <QuoteBox quote={this.state.quotes}/>
      </div>
    </div>
  );
  }
}

export default App;
