// import React, { useState } from "react";
import GroupomaniaBrand from "../assets/icon.svg";
import { getAllPost } from "../service/post.js";
function Header() {
  //   const [choice, setChoice] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={GroupomaniaBrand}
            width="50"
            height="50"
            className="d-inline-block"
            alt=""
          />
          Groupomania
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/signin">
                S'inscrire <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Se connecter
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              getAllPost();
            }}
          >
            test
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
