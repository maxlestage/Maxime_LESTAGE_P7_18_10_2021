import Cards from "./Cards";
import SignIn from "./SignIn";
// import Login from "./Login";
// import Comment from "./Comment";
// import UserPost from "./UserPost";
// import Inputpost from "./InputPost";
// import Toasts from "./Toasts";
import SignUp from "./SignUp";

function Home({ currentUser, isMember, onSignIn, onSignUp }) {
  ///
  function Connect() {
    if (!isMember) {
      return <SignUp onSignUp={onSignUp} />;
    } else {
      return <SignIn onSignIn={onSignIn} />;
    }
  }

  if (!currentUser) {
    return (
      <div className="loggin_off">
        <Connect />
      </div>
    );
  }

  return <Cards />;
}
export default Home;
