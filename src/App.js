import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Home";
import Loginpage from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Loginpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
