import React, { Component } from 'react';
import AlgorithmList from './components/algorithm/AlgorithmList';
import Question from './components/Question';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlgorithmList/>
      </div>
    );
  }
}

export default App;
