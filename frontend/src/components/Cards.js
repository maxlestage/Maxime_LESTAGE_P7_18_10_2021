import { useEffect, useState } from "react";
import { getAllPost } from "../service/post.js";
import "../styles/card.css";
import "../styles/mobile.css";
import Comments from "./Comments";
import Inputpost from "./InputPost.js";
import { deletePostByUser } from "../service/post.js";

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
    <>
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
    </>
  );
}

export function Card({ post, info, currentUser, onDelete }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function DeleteButton() {
    if (currentUser.id === post.userId || currentUser.id === 1) {
      return (
        <button
          type="button"
          className="showComment btn btn-outline-danger"
          onClick={async () => {
            if (
              window.confirm("Voulez vraiment surpprimer le post ?") === true
            ) {
              await deletePostByUser(post.id);
              onDelete();
            }

            ///
          }}
        >
          🗑
        </button>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="container-fluid mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-header">
              <div className="media flex-wrap w-100 align-items-center">
                {post.user.profilePicture ? (
                  <img
                    src={`http://localhost:3000/images/${post.user.profilePicture}`}
                    className="d-block ui-w-40 rounded-circle card-avatar"
                    alt={`Avatar de ${post.user.lastName} ${post.user.firstName} `}
                  />
                ) : null}

                <div className="media-body ml-3">
                  <p>
                    {post.user.lastName} {post.user.firstName}
                  </p>
                  <div className="text-muted small">
                    {`Publié le : ${new Intl.DateTimeFormat(
                      "fr-FR",
                      options
                    ).format(new Date(post.date))}`}
                  </div>
                </div>
                <DeleteButton />
              </div>
            </div>
            <div className="card-body">
              <p className="card-title">{post.title}</p>
              <p>{post.content}</p>
              {post.file ? (
                <img
                  className="d-block w-100"
                  alt={"tets"}
                  src={`http://localhost:3000/images/${post.file}`}
                ></img>
              ) : null}
            </div>
            <div className="card-footer">
              <div className="card-button">
                {/* <EditButton /> */}

                <Accordion postId={post.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards({ currentUser }) {
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
      <Inputpost onSubmit={refreshPost} />
      {posts
        .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
        .map((post) => (
          <Card
            currentUser={currentUser}
            key={post.id}
            post={post}
            onDelete={refreshPost}
            onEdit={refreshPost}
          />
        ))}
    </div>
  );
}

export default Cards;
