import axios from "axios";
axios.defaults.withCredentials = true;
function userSignUp() {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "POST",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/signup",
    data: FormData,
  });
}

function userLogin() {
  // axios.defaults.withCredentials = true
  return axios({
    method: "POST",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/login",
    data: {
      mail: "max@test.com",
      password: "jefaisuntest35",
    },
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
