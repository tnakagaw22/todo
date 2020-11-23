import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Nav from './components/Nav';
import ToDo from './pages/ToDo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/" component={ToDo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
