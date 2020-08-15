import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TitleBarComponent from './components/TitleBarComponent';
import UploadComponent from './components/UploadComponent';
import VideoComponent from './components/VideoComponent';

import './styles/App.scss';

import Mohan from './assets/images/mohan-muruge.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TitleBarComponent image={Mohan}/>
          <Switch>
            <Route path='/upload' component={UploadComponent} />
            <Route path='/videos/:id' component={VideoComponent} />
            <Route exact path='/videos' component={VideoComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
