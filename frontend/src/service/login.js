import axios from "axios";
axios.defaults.withCredentials = true;
function userSignUp(data) {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "POST",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/signup",
    data: data,
  });
}

function userLogin(data) {
  // axios.defaults.withCredentials = true
  return axios({
    method: "POST",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/login",
    data: data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return { message: err };
    });
}
function userLogout() {
  console.log("Logout");
  // axios.defaults.withCredentials = true;
  return axios({
    method: "DELETE",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/logout",
  });
}

export { userLogin, userLogout, userSignUp };
