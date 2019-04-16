import React, { Component } from 'react';
import MainContentContainer from './containers/layout/MainContentContainer';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          </div>
          <div className="col-lg-12">
            <MainContentContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
