import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authentication from './authentication';
// import Header from './components/sidebar/header';
import MainPage from './main-page';
import ClassroomContainer from './classroomContainer';
// import Class from './class';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Authentication />
      </Route>
      <Route path='/main-page'>
        <MainPage />
      </Route>
      <Route path='/classroom'>
        <ClassroomContainer />
      </Route>
    </Router>
  );
}

export default App;
