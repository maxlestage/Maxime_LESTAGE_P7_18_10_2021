import axios from "axios";

axios.defaults.withCredentials = true;

function getAllPost() {
  return axios({
    method: "GET",
    url: "http://localhost:3000/api/posts",
  });
}

function getAllPostByUser(userId) {
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/auth/${userId}`,
  });
}

function postByUser(formData) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/posts/",
    data: formData,
  });
}

function deletePostByUser(postId) {
  return axios({
    method: "DELETE",
    url: `http://localhost:3000/api/posts/${postId}`,
  });
}

export { getAllPost, getAllPostByUser, postByUser, deletePostByUser };
