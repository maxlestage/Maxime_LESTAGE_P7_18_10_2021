import axios from "axios";

function getAllComment(postId) {
  postId = 2;
  return axios({
    method: "get",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
  });
  // }).then((response) => console.log(response.data));
}

function postComment(postId, userContent) {
  postId = 2;
  return axios({
    method: "post",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
    data: { content: userContent },
  });
  // .then((response) => console.log(response.data))
  // .catch();
}

export { getAllComment, postComment };
