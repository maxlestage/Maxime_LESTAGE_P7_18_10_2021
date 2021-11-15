import { userLogin, userLogout } from "../service/login";
function Login() {
  function buttonOnClickLogin() {
    userLogin();
    window.location
      .reload()
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function buttonOnClickLogout() {
    userLogout();
    window.location
      .reload()
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <button className="btn btn-info" onClick={() => buttonOnClickLogin()}>
        login
      </button>
      <button className="btn btn-info" onClick={() => buttonOnClickLogout()}>
        logout
      </button>
    </div>
  );
}

export default Login;
