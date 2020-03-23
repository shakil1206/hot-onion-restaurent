import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';

function App() {
  return (
    <div className="App">

      <Header></Header>  
      <Router>
        <Switch>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/">
            <Breakfast></Breakfast>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
         

    </div>
  );
}

export default App;
