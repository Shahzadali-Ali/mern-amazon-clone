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
import Wishlist from "./pages/Wishlist/Wishlist";
import Account from "./pages/Account/Account";

import { useStateValue } from "./ContextApi/StateProvider";
import { auth } from "./FirebaseConfig/Config";

function App() {
  const [{ user, cart }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: {
            uid: user.uid,
            email: user.email,
          },
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
        <Route path="/wishlist">
          <Wishlist />
        </Route>

        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
