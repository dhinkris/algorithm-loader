// import React, { Component } from 'react';
// import AlgorithmList from './components/algorithm/AlgorithmList';
// import Question from './components/Question';
// import './App.css';
// import data from './components/algorithm/test';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <AlgorithmList/>
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from 'react';
import ConnectPipeline from './algorithm/ConnectPipeline';
class App extends Component{
  render(){
    return(
        <div>
          <ConnectPipeline/>
        </div>
    )
  }
}
export default App;
