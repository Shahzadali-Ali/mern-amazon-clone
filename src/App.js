import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Home";
import Loginpage from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      {/* Loading and end to scroll */}
      <div id="wpf-loader-two">
        <div className="wpf-loader-two-inner">
          <span>Loading</span>
        </div>
      </div>

      <a className="scrollToTop" href="#">
        <i className="fa fa-chevron-up"></i>
      </a>

      <Header />
      <Menu />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Loginpage />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
