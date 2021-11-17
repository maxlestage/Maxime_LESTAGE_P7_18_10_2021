import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
// import Profile from "./components/Profile";

import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function userIsConnected() {
    return axios({ method: "GET", url: `http://localhost:3000/api/auth/user` });
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
  const [isMember, setIsMember] = useState(false);
  // ismember lecture & setIsMember lecture et ecriture
  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        onLogin={setCurrentUser}
        setIsMember={setIsMember} // Ecriture
      />
      <Home
        currentUser={currentUser}
        isMember={isMember} // Lecture
        onSignIn={loginUser}
        onSignUp={loginUser}
      />
      {/* <Profile /> */}
      {/* <SignIn onSignUp={onSignUp} /> */}

      <Footer />
    </div>
  );
}

export default App;
