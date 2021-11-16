import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState, useEffect } from "react";
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

  return (
    <div className="App">
      <Header currentUser={currentUser} onLogin={setCurrentUser} />
      <Home currentUser={currentUser} />
      {/* <Profile /> */}

      <Footer />
    </div>
  );
}

export default App;
