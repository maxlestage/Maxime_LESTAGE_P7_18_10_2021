import axios from "axios";
axios.defaults.withCredentials = true;
function userSignUp(data) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/auth/signup",
    data: data,
  });
}

function userLogin(data) {
  return axios({
    method: "POST",

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

function userEdit(data, userId) {
  return axios({
    method: "PUT",
    url: `http://localhost:3000/api/auth/edit/${userId}`,
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
  return axios({
    method: "DELETE",

    url: "http://localhost:3000/api/auth/logout",
  });
}

function userDelete(userId) {
  return axios({
    method: "DELETE",

    url: `http://localhost:3000/api/auth/delete/${userId}`,
  });
}

export { userLogin, userLogout, userSignUp, userEdit, userDelete };
