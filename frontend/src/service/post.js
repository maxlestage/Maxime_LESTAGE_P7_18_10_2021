import axios from "axios";

// get all posts on the platform
function getAllPost() {
  return axios({
    method: "get",
    url: "http://localhost:3000/api/posts",
  });
}

// get all posts from user logged in
function getAllPostByUser(userId) {
  // return axios({
  //   method: "get",
  //   url: `localhost:3000/api/auth/${1}`,
  // });
}

export { getAllPost, getAllPostByUser };
