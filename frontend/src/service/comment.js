import axios from "axios";

axios.defaults.withCredentials = true;

function getAllComment(postId) {
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
  });
}

function postComment(postId, formData) {
  return axios({
    method: "POST",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
    data: formData,
  });
}

export { getAllComment, postComment };
