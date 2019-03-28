import React, { Component } from 'react';
import './assets/css/App.css';
// import Welcome from './components/welcome';
import Hello from './components/hello';
import Index from './components/clock';
import './assets/css/welcome.css';

class App extends Component {
  render() {
    const obj = {
      show: true,
      name: ['hah']
    } 
    return (
      <div className="App">
        <header className="App-header">
          {/* <Welcome {...obj}>
            <span>this is a child</span>
          </Welcome> */}
          <Hello {...obj}></Hello>
          <Index/>
        </header>
      </div>
    );
  }
}

export default App;
