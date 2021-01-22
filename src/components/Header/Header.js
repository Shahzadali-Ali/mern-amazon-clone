import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextApi/StateProvider";
import { cartTotal } from "../../ContextApi/reducer";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { auth } from "../../FirebaseConfig/Config";

const Header = () => {
  const [{ user, cart }, dispatch] = useStateValue();

  const removeCartItem = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      id: id,
    });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() =>
        dispatch({
          type: "SET_USER",
          user: null,
        })
      )
      .catch((err) => window.alert(err.message));
  };

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
                      <Link
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
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <Link to="#">
                            <img src="img/flag/french.jpg" alt="" />
                            FRENCH
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img src="img/flag/english.jpg" alt="" />
                            ENGLISH
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="aa-currency">
                    <div className="dropdown">
                      <Link
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
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <Link href="#">
                            <i className="fa fa-euro"></i>EURO
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-jpy"></i>YEN
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="cellphone hidden-xs">
                    <p>
                      <span className="fa fa-phone"></span>+91-9772-079144
                    </p>
                  </div>
                </div>

                <div className="aa-header-top-right">
                  <ul className="aa-head-top-nav-right">
                    <li>
                      {user?.email ? (
                        <Link to="/account">{user.email}</Link>
                      ) : (
                        <Link to="/login">My account</Link>
                      )}
                    </li>
                    <li className="hidden-xs">
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li className="hidden-xs">
                      <Link to="/cart">My Cart</Link>
                    </li>
                    <li className="hidden-xs">
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      {user?.email ? (
                        <button
                          onClick={(e) => logout()}
                          className="btn btn-danger"
                        >
                          {" "}
                          Logout{" "}
                        </button>
                      ) : (
                        <Link
                          to="/login"
                          data-toggle="modal"
                          data-target="#login-modal"
                        >
                          Login
                        </Link>
                      )}
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
                  <Link className="aa-cart-link" href="#">
                    <span className="fa fa-shopping-basket"></span>
                    <span className="aa-cart-title">SHOPPING CART</span>
                    <span className="aa-cart-notify">{cart.length}</span>
                  </Link>
                  <div className="aa-cartbox-summary">
                    <ul>
                      {cart.map((product) => (
                        <li>
                          <Link className="aa-cartbox-img" href="#">
                            <img src="img/woman-small-2.jpg" alt="img" />
                          </Link>
                          <div className="aa-cartbox-info">
                            <h4>
                              <Link href="#">{product.name}</Link>
                            </h4>
                            <p>${product.newPrice}</p>
                          </div>
                          <Link
                            onClick={() => removeCartItem(product.id)}
                            className="aa-remove-product"
                          >
                            <span className="fa fa-times"></span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <span className="aa-cartbox-total-title">Total</span>
                        <span className="aa-cartbox-total-price">
                          ${cartTotal(cart)}
                        </span>
                      </li>
                    </ul>

                    <Link
                      className="aa-cartbox-checkout aa-primary-btn"
                      to="/checkout"
                    >
                      {" "}
                      Checkout
                    </Link>
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
