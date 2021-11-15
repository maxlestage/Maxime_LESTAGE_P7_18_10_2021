import axios from "axios";

function userLogin() {
  axios.interceptors.response.use(
    function (response) {
      // Do something with response data
      console.log(response);
      return response;
    },
    function (error) {
      console.log({ error });
      // Do something with response error
      if (error.status === 401) {
        console.log("t'es pas conecté");
      }
      return Promise.reject(error);
    }
  );
  console.log("test");
  axios.defaults.withCredentials = true;
  return axios({
    method: "post",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/login",
    data: {
      mail: "max@test.com",
      password: "jefaisuntest35",
    },
  });
}
function userLogout() {
  console.log("Logout");
  //   axios.defaults.withCredentials = true;
  return axios({
    method: "delete",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    url: "http://localhost:3000/api/auth/logout",
  });
}

export { userLogin, userLogout };
