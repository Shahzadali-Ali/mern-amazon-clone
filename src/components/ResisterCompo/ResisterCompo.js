import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { auth } from "../../FirebaseConfig/Config";

const ResisterCompo = ({ user, dispatch, setRegister }) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch({
          type: "SET_USER",
          user,
        });
        window.alert("Registered successfully : " + user.email);
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
                    <h4>Register with your Credentials</h4>
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
                        Register
                      </button>
                      <hr></hr>
                    </form>
                  </div>
                  <p className="aa-lost-password">Already have an account?</p>

                  <button
                    onClick={() => setRegister(false)}
                    className="btn-success btn-lg"
                  >
                    Login here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResisterCompo;
