import axios from "axios";

async function getAllComment(postId) {
  const response = await axios({
    method: "get",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
  });
  return console.log(response.data);
}

async function postComment(postId, userContent) {
  const response = await axios({
    method: "post",
    url: `http://localhost:3000/api/posts/${postId}/comments`,
    data: { content: userContent },
  });
  return console.log(response.data);
}

export { getAllComment, postComment };
