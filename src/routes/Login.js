import React, { Component } from "react";
import ReactDom from "react";
import { GoogleLogin } from "react-google-login";

import FacebookLogin from "react-facebook-login";

import "bootstrap/dist/css/bootstrap.css";
import "../style/Login.css";

import Logo from "../asset/yoga.png";
import Google from "../asset/Google.png";
import Facebook from "../asset/Facebook.png";



const responseGoogle = response => {
  console.log(response);
};

const responseFacebook = response => {
  console.log(response);
};

class Login extends Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <img src={Logo} alt="yog" className="w-100 image-logo" />
            </div>
            <div className="col-md-3">
              <div className="row align-items-center h-100">
                <div className="col">
                  <GoogleLogin
                    clientId="37866910395-f3925m928ti1vfve1qboea3o17r4a7st.apps.googleusercontent.com"
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  
                  <br />
                  <br />
                  <FacebookLogin
                    appId="555298271749129"
                    autoLoad={true}
                    fields="name,email,picture"
                    

                  />
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
