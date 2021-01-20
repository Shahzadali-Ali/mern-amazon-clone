import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="aa-header">
      <div className="aa-header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-header-top-area">
                <div className="aa-header-top-left">
                  <div className="aa-language">
                    <div className="dropdown">
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <img src="img/flag/english.jpg" alt="english flag" />
                        ENGLISH
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a href="#">
                            <img src="img/flag/french.jpg" alt="" />
                            FRENCH
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/flag/english.jpg" alt="" />
                            ENGLISH
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="aa-currency">
                    <div className="dropdown">
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <i className="fa fa-usd"></i>USD
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a href="#">
                            <i className="fa fa-euro"></i>EURO
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-jpy"></i>YEN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="cellphone hidden-xs">
                    <p>
                      <span className="fa fa-phone"></span>00-62-658-658
                    </p>
                  </div>
                </div>

                <div className="aa-header-top-right">
                  <ul className="aa-head-top-nav-right">
                    <li>
                      <a href="account.html">My Account</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="cart.html">My Cart</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="" data-toggle="modal" data-target="#login-modal">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start header bottom */}
      <div className="aa-header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-header-bottom-area">
                {/* My Logo*/}
                <div className="aa-logo">
                  <a href="index.html">
                    <img src="img/logo.jpg" alt="logo img" />
                  </a>
                </div>

                {/*Chartbox*/}

                <div className="aa-cartbox">
                  <a className="aa-cart-link" href="#">
                    <span className="fa fa-shopping-basket"></span>
                    <span className="aa-cart-title">SHOPPING CART</span>
                    <span className="aa-cart-notify">2</span>
                  </a>
                  <div className="aa-cartbox-summary">
                    <ul>
                      <li>
                        <a className="aa-cartbox-img" href="#">
                          <img src="img/woman-small-2.jpg" alt="img" />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                        <a className="aa-remove-product" href="#">
                          <span className="fa fa-times"></span>
                        </a>
                      </li>
                      <li>
                        <a className="aa-cartbox-img" href="#">
                          <img src="img/woman-small-1.jpg" alt="img" />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                        <a className="aa-remove-product" href="#">
                          <span className="fa fa-times"></span>
                        </a>
                      </li>
                      <li>
                        <span className="aa-cartbox-total-title">Total</span>
                        <span className="aa-cartbox-total-price">$500</span>
                      </li>
                    </ul>
                    <a
                      className="aa-cartbox-checkout aa-primary-btn"
                      href="checkout.html"
                    >
                      Checkout
                    </a>
                  </div>
                </div>

                {/*Searchbox*/}
                <div className="aa-search-box">
                  <form action="">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search here ex. 'man' "
                    />
                    <button type="submit">
                      <span className="fa fa-search"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
