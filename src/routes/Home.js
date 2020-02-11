import React, { Component } from "react";
import GoogleLogout from "react-google-login";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import "../style/Login.css";


class Home extends Component {
  render() {
    return (
      <div className="body">
        <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-dark shadow-sm">
          <div className="container nav-alignment">
            <a href="#" className="navbar-brand">
              <img
                src={firebase.auth().currentUser.photoURL}
                width="45"
                alt=""
                className="d-inline-block align-middle mr-2 rounded-circle z-depth-0"
              />

              <span className="text-uppercase font-weight-bold">GURU</span>
            </a>

            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Session
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Publish
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <button onClick={() => firebase.auth().signOut()}> Logout </button>
          </div>
        </nav>

        <div className="container">
            
            <button>Session</button>
            <button>Publish</button>
            <button>Shop</button>
        </div>
      </div>
    );
  }
}
export default Home;
