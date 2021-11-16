// import React, { useState } from "react";
import { userLogin, userLogout } from "../service/login";
import GroupomaniaBrand from "../assets/icon.svg";
// import { getAllPost } from "../service/post.js";
import "../styles/navbar.css";

function Header({ currentUser, onLogin }) {
  // let [choice, setChoice] = useState(true);

  async function buttonOnClickLogin() {
    const user = await userLogin();
    console.log(user);
    onLogin(user);
    //window.location.reload();
  }
  function buttonOnClickLogout() {
    userLogout();
    onLogin(null);
    //window.location.reload();
  }

  function UserConnect() {
    if (currentUser === null) {
      return (
        <ul className="navbar-nav ml-auto mr-1">
          <li className="nav-item active">
            <a className="nav-link" href="/signin">
              S'inscrire <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => buttonOnClickLogin()}>
              Se connecter
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto mr-1">
          <li className="nav-item">
            <button className="nav-link">Éditer le profil</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Voir mon profil</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => buttonOnClickLogout()}>
              Se déconnecter
            </button>
          </li>
        </ul>
      );
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={GroupomaniaBrand}
            width="50"
            height="50"
            className="d-inline-block"
            alt="Logo du groupe Groupomania"
          />
        </a>
        <h1 className="text-center">Groupomania</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <UserConnect />
          {/* <button
            onClick={() => {
              getAllPost();
            }}
          >
            test
          </button> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
