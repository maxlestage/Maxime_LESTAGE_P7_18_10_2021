import axios from "axios";

axios.defaults.withCredentials = true;

function getAllComment(postId) {
  // axios.defaults.withCredentials = true;
  // postId = 2;
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
  });
  // }).then((response) => console.log(response.data));
}

function postComment(postId, userContent) {
  // axios.defaults.withCredentials = true;
  // postId = 2;
  return axios({
    method: "POST",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
    data: { content: userContent },
  });
  // .then((response) => console.log(response.data))
  // .catch();
}

function editCommentByUser(postId) {
  // axios.defaults.withCredentials = true;
  // postId = 2;
  return axios({
    method: "PUT",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
    data: {},
  });
}

function deleteCommentByUser(postId) {
  // axios.defaults.withCredentials = true;
  // postId = 2;
  return axios({
    method: "DELETE",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
  });
}

function deleteCommentByAdmin(postId) {
  // axios.defaults.withCredentials = true;
  // postId = 2;
  return axios({
    method: "PUT",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
    data: {},
  });
}

export { getAllComment, postComment };
