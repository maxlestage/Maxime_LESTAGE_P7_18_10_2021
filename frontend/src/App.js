import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function userIsConnected() {
    return axios({
      method: "GET",
      url: `http://localhost:3000/api/auth/user`,
    });
  }

  useEffect(() => {
    userIsConnected().then((response) => {
      setCurrentUser(response.data);
    });
  }, []);

  function loginUser() {
    userIsConnected().then((response) => {
      setCurrentUser(response.data);
    });
  }
  const [isMember, setIsMember] = useState(false); // isMember lecture & setIsMember lecture et ecriture affiche signin ou signup

  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        onLogin={setCurrentUser}
        setIsMember={setIsMember} // Ecriture
        changePage={setPage} // Ecriture
      />
      <Home
        currentUser={currentUser}
        isMember={isMember} // Lecture
        onSignIn={loginUser}
        onSignUp={loginUser}
        page={page} // Lecture
        changePageToUserEdit={setPage}
        setCurrentUser={setCurrentUser}
      />
      <Footer />
    </div>
  );
}

export default App;
