import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Nav';
import ToDo from './pages/ToDo';
import SignIn from './pages/SignIn';

function App() {


  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/">
            <ToDo />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
