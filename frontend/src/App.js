import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
// import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Profile /> */}
      <Footer />
    </div>
  );
}

export default App;
