import { getAllPostByUser } from "../service/post";
import { useState, useEffect } from "react";
import { Card } from "./Cards";
import Inputpost from "./InputPost";
import "../styles/mobile.css";
function UserPost({ currentUser, onSubmit }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPostByUser(currentUser.id).then((response) => {
      setPosts(response.data);
    });
  }, [currentUser.id]);

  function refreshPost() {
    getAllPostByUser(currentUser.id).then((response) => {
      setPosts(response.data);
    });
  }

  return (
    <>
      <div className="card-container">
        <div className="post-card mobile_post-card">
          <Inputpost onSubmit={refreshPost} />
          {posts
            .sort(
              ({ id: previousID }, { id: currentID }) => currentID - previousID
            )
            .map((post) => (
              <Card
                post={post}
                key={post.id}
                currentUser={currentUser}
                onDelete={refreshPost}
              />
            ))}
        </div>
      </div>
    </>
  );
}
export default UserPost;
