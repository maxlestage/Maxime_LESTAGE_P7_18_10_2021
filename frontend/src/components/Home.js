import Cards from "./Cards";
import SignIn from "./SignIn";
import UserPost from "./UserPost";
import SignUp from "./SignUp";
import Profile from "./Profile";

function Home({
  currentUser,
  isMember,
  onSignIn,
  onSignUp,
  page,
  changePageToUserEdit,
  setCurrentUser,
}) {
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

  if (page === "Home") {
    return <Cards currentUser={currentUser} />;
  } else if (page === "Profile") {
    return <UserPost currentUser={currentUser} />;
  } else if (page === "Edit") {
    return (
      <Profile
        currentUser={currentUser}
        changePageToUserEdit={changePageToUserEdit}
        setCurrentUser={setCurrentUser}
      />
    );
  } else {
    return <Cards currentUser={currentUser} />;
  }
}
export default Home;
