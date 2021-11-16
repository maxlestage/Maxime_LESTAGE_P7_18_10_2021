import axios from "axios";

axios.defaults.withCredentials = true;
// get all posts on the platform
function getAllPost() {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "GET",
    url: "http://localhost:3000/api/posts",
  });
}

// // get all posts from user logged in
// function getAllPostByUser(userId) {
//   // axios.defaults.withCredentials = true;
//   // return axios({
//   //   method: "get",
//   //   url: `localhost:3000/api/auth/${1}`,
//   // });
// }

function postByUser(formData) {
  // axios.defaults.withCredentials = true;
  console.log(formData);
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/posts/",
    data: formData,
  });
}

function editPostByUser(id) {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "PUT",
    url: "http://localhost:3000/api/posts",
  });
}

function deletePostByUser() {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "DELETE",
    url: "http://localhost:3000/api/posts",
  });
}

function deletePostByAdmin() {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "DELETE",
    url: "http://localhost:3000/api/posts",
  });
}

export {
  getAllPost,
  // getAllPostByUser,
  postByUser,
  editPostByUser,
  deletePostByUser,
  deletePostByAdmin,
};
