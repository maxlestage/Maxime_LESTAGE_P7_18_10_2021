import { getAllPost } from "../service/post";
import { useState, useEffect } from "react";

function UserPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPost().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <div className="post-card w-75">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{post.date}</small>
              <button
                onClick={() => {
                  getAllPost(post.id);
                }}
              >
                view comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default UserPost;
