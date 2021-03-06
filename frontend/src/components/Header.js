import { userLogout } from "../service/login";
import GroupomaniaBrand from "../assets/icon.svg";
import "../styles/navbar.css";

function Header({ currentUser, onLogin, setIsMember, changePage }) {
  function buttonOnClickLogin(choice) {
    setIsMember(choice);
  }

  function buttonOnClickLogout() {
    userLogout();
    onLogin(null);
  }

  function UserConnect() {
    if (currentUser === null) {
      return (
        <ul className="navbar-nav ml-auto mr-1">
          <li className="nav-item active">
            <button
              className="btn btn-link"
              onClick={() => buttonOnClickLogin(false)}
            >
              S'inscrire <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link"
              onClick={() => buttonOnClickLogin(true)}
            >
              Se connecter
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto mr-1">
          <li className="nav-item">
            <button
              className="btn btn-link"
              onClick={() => {
                changePage("Edit");
              }}
            >
              Éditer le profil
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link"
              onClick={() => {
                changePage("Profile");
              }}
            >
              Voir mes posts
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link"
              onClick={() => buttonOnClickLogout()}
            >
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
        <a
          href="/"
          className="navbar-brand"
          onClick={() => {
            changePage("Home");
          }}
        >
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
        </div>
      </nav>
    </>
  );
}

export default Header;
