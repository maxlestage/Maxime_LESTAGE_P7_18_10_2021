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

// get all posts from user logged in
function getAllPostByUser(userId) {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/auth/${userId}`,
  });
}

function postByUser(formData) {
  // axios.defaults.withCredentials = true;
  console.log(formData);
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/posts/",
    data: formData,
  });
}

// function editPostByUser(postId) {
//   // axios.defaults.withCredentials = true;
//   return axios({
//     method: "PUT",
//     url: `http://localhost:3000/api/posts/${postId}`,
//   });
// }

function deletePostByUser(postId) {
  // axios.defaults.withCredentials = true;
  return axios({
    method: "DELETE",
    url: `http://localhost:3000/api/posts/${postId}`,
  });
}

export { getAllPost, getAllPostByUser, postByUser, deletePostByUser };
