import React from "react";

const LoginModal = () => {
  return (
    <div
      className="modal fade"
      id="login-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4>Login or Register</h4>
            <form className="aa-login-form" action="">
              <label for="">
                Username or Email address<span>*</span>
              </label>
              <input type="text" placeholder="Username or email" />
              <label for="">
                Password<span>*</span>
              </label>
              <input type="password" placeholder="Password" />
              <button className="aa-browse-btn" type="submit">
                Login
              </button>
              <label for="rememberme" className="rememberme">
                <input type="checkbox" id="rememberme" /> Remember me{" "}
              </label>
              <p className="aa-lost-password">
                <a href="#">Lost your password?</a>
              </p>
              <div className="aa-register-now">
                Don't have an account?<a href="account.html">Register now!</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
