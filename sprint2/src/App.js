import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TitleBarComponent from './components/TitleBarComponent';
import UploadPage from './pages/UploadPage';
import VideoPage from './pages/VideoPage';

import './styles/App.scss';

import Mohan from './assets/images/mohan-muruge.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TitleBarComponent image={Mohan}/>
          <Switch>
            <Route path='/upload' component={UploadPage} />
            <Route path='/videos/:id' component={VideoPage} />
            <Route exact path='/videos' component={VideoPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
