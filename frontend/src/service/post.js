import axios from "axios";

function getAllPost() {
  return axios({
    method: "get",
    url: "http://localhost:3000/api/posts",
  });
}

export { getAllPost };
