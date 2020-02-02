import React, { Component } from "react";
import ReactDom from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Login.css";
import Logo from "../asset/yoga.png";
import Google from "../asset/Google.png"
import Facebook from "../asset/Facebook.png"

class Login extends Component {
  render() {
    return (
      <div class="body">
        <div class="container">
          

          <div class="row">
            <div class="col-md-6 ">
              <img src={Logo} alt="yog" class="w-100 image-logo" />
            </div>
            <div class="col-md-3">
              <div class="row align-items-center h-100">
                <div class="col">
                <button type="button" class="btn btn-labeled btn-login">
                <span class="btn-label">
                  <img class="login-btn-icon" src={Google}/>
                  </span>Continue with Google &nbsp;&nbsp;  
                  </button>
                  
                  
                    <br />
                    <br />
                    <button type="button" class="btn btn-labeled btn-login">
                <span class="btn-label"><img class="login-btn-icon" src={Facebook}/></span>Continue with Facebook</button>
            <br />  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
