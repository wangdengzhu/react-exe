import React, { Component } from 'react';
import './assets/css/App.css';
import Welcome from './components/welcome';

class App extends Component {
  constructor(props){
    super(props);
    this.clickme = this.clickme.bind(this);
  }
  clickme(){
    alert(111);
  }
  render() {
    const arr = ['wangdeng','denzel','jack'];
    return (
      <div className="App">
        <header className="App-header">
          {new Date().toLocaleTimeString()}
          <Welcome names={arr}></Welcome>
        </header>
      </div>
    );
  }
}

export default App;
