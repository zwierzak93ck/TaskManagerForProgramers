import React, { Component } from 'react';
import { Navbar } from './components/layout/Navbar';
import { ProjectDetails } from './components/project/ProjectDetails';
import { CreateProject } from './components/project/CreateProject';
import { Sidebar } from './components/layout/Siedebar';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { MainContent } from './components/layout/MainContent';


class App extends Component {
  render() {
    return (
        

<div className="container">
      <div className="row">
          <div className="col-lg-12">
          </div>
          <div className="col-lg-12">
          <MainContent/>
          </div>
      </div>
</div>

     
    );
  }
}

export default App;
