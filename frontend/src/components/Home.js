import Cards from "./Cards";
// import Login from "./Login";
// import Comment from "./Comment";
// import UserPost from "./UserPost";
// import Inputpost from "./InputPost";
// import Toasts from "./Toasts";
import SignIn from "./SignIn";

function Home({ currentUser }) {
  if (!currentUser) {
    return (
      <div className="loggin_off">
        <SignIn />
      </div>
    );
  }

  return (
    <>
      {/* <Login choice={choice} onClick={() => setChoice(choice + 1)} /> */}
      {/* <Toasts /> */}
      {/* <Inputpost /> */}
      {/* <UserPost /> */}

      <Cards />
    </>
  );
}
export default Home;
