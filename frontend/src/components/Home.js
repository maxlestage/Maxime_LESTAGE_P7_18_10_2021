import { useEffect, useState } from "react";
import { getAllPost } from "../service/post.js";
import { getAllComment } from "../service/comment.js";
import "../styles/card.css";

function Home() {
  useEffect(() => {
    getAllPost().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className="post-card w-50">
        {posts.map((post) => (
          <div className="card " key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{post.date}</small>
              <button
                onClick={() => {
                  getAllComment(post.id);
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
export default Home;
