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

import React, { Component } from 'react';
import traverse from './utils/traverse';
// import SampleFlow from './algorithm/ConnectPipeline'
import HomePage from './pages/Homepage';
import AlgorithmDetailsPage from './pages/AlgorithmDetailsPage';
import ConnectPipeline from './algorithm/ConnectPipeline';
import history from './history';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

traverse()
class App extends Component {
  render() {
    return (
      <div>
        {/* <SampleFlow/> */}
        <div id="container"></div>
        {/* <ConnectPipeline /> */}
        <Router history={history}>
          <Switch>
            <Route path="/home" exact component={() => <HomePage />} />
            <Route path="/algorithm/details" component={AlgorithmDetailsPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
