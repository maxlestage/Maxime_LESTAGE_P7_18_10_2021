import { useEffect, useState } from "react";
import { getAllPost } from "../service/post.js";
import "../styles/card.css";
import Comments from "./Comments";
import Inputpost from "./InputPost.js";

function Accordion({ postId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onClose={() => setActiveIndex(0)}
      >
        <Comments postId={postId} />
      </Panel>
    </>
  );
}

function Panel({ children, isActive, onShow, onClose }) {
  return (
    <section className="panel">
      {isActive ? (
        <>
          {children}
          <button
            type="button"
            className="showComment btn btn-secondary"
            onClick={onClose}
          >
            Fermer
          </button>
        </>
      ) : (
        <button
          type="button"
          className="showComment btn btn-secondary"
          onClick={onShow}
        >
          Voir les commentaires
        </button>
      )}
    </section>
  );
}

function Card({ post }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="container-fluid mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-header">
              <div className="media flex-wrap w-100 align-items-center">
                <img
                  src={`http://localhost:3000/images/${post.user.profilePicture}`}
                  className="d-block ui-w-40 rounded-circle"
                  alt=""
                />
                <div className="media-body ml-3">
                  <a href="/user">
                    {post.user.lastName} {post.user.firstName}
                  </a>
                  <div className="text-muted small">
                    {`Publié le : ${new Intl.DateTimeFormat(
                      "fr-FR",
                      options
                    ).format(new Date(post.date))}`}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-title">{post.title}</p>
              <p>{post.content}</p>
            </div>
            <div className="card-footer">
              <div className="text-right">
                <Accordion postId={post.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPost().then((response) => {
      setPosts(response.data);
    });
  }, []);

  function refreshPost() {
    getAllPost().then((response) => {
      setPosts(response.data);
    });
  }

  return (
    <div className="card-container">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      <Inputpost onSubmit={refreshPost} />
    </div>
  );
}

export default Cards;
