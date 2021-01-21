import React from "react";
import "./Login.style.css";
import { Link } from "react-router-dom";

const Login = () => {
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
                 <form action="" className="aa-login-form">
                  <label for="">Username or Email address<span>*</span></label>
                   <input type="text" placeholder="Username or email"/>
                   <label for="">Password<span>*</span></label>
                    <input type="password" placeholder="Password"/>
                    <button type="submit" className="aa-browse-btn">Login</button>
                    <label className="rememberme" for="rememberme">
                    <input type="checkbox" id="rememberme"/> Remember me </label>
                    <p className="aa-lost-password"><Link href="#">Lost your password?</Link></p>
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

export default Login;
