import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Login.css";
import  Home from './Home';
import Logo from "../asset/yoga.png";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { compose, createStore, applyMiddleware } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'



firebase.initializeApp({
  apiKey: "AIzaSyDLp3sFCipRw5rE9CBOGlwwuesfp9AESZg",
  authDomain:"guru-f167b.firebaseapp.com"
}
)
class Login extends Component {

  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount = () => {
     
    firebase.auth().onAuthStateChanged(user=> {
      this.setState({isSignedIn:!!user })
    })


    
  }


  
  render(){
    return(
     <div className="body">
       {this.state.isSignedIn ? 
       
       <Home/>
       
       
       :(
       
       <StyledFirebaseAuth
       
       uiConfig = {this.uiConfig}
       firebaseAuth = {firebase.auth()}
       
       />
       
       
       )}
     </div>
    );
}


}
export default Login;
