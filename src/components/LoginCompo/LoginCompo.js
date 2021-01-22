import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { auth } from "../../FirebaseConfig/Config";

const LoginCompo = ({ user, dispatch, setRegister }) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch({
          type: "SET_USER",
          user,
        });
        window.alert("Login successful for : " + user.email);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage, "Error Code : " + errorCode);
      });
  };
  return (
    <section id="aa-myaccount">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-myaccount-area">
              <div className="row">
                <div className="md-offset-3 col-md-6">
                  <div className="aa-myaccount-login">
                    <h4>Login</h4>
                    <form
                      className="aa-login-form"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      {user && <strong>{user.email}</strong>}
                      <label for="">
                        Username or Email address<span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Username or email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="">
                        Password<span>*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="submit" className="aa-browse-btn">
                        Login
                      </button>
                      <label className="rememberme" for="rememberme">
                        <input type="checkbox" id="rememberme" /> Remember me{" "}
                      </label>
                      <p className="aa-lost-password">
                        <Link>Lost your password?</Link>
                      </p>
                      <button
                        onClick={() => setRegister(true)}
                        className="btn-info btn-lg"
                      >
                        Create new account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginCompo;
