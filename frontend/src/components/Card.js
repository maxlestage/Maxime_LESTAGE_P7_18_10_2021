import { useEffect, useState } from "react";
import { getAllPost } from "../service/post.js";
// import { getAllComment } from "../service/comment.js";
import "../styles/card.css";
import Comment from "./Comment";
import Inputpost from "./InputPost.js";

function Card() {
  useEffect(() => {
    getAllPost().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const [posts, setPosts] = useState([]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function Accordion({ postId }) {
    console.log(postId);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <Panel
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
          onClose={() => setActiveIndex(0)}
        >
          <Comment postId={postId} />
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

  // { <Comment />}
  return (
    <div className="card-container">
      {posts.map((post) => (
        <div className="container-fluid mt-100">
          <div className="row">
            <div className="col-md-12">
              <div key={post.id} className="card mb-4">
                <div className="card-header">
                  <div className="media flex-wrap w-100 align-items-center">
                    <img
                      src="https://i.imgur.com/iNmBizf.jpg"
                      className="d-block ui-w-40 rounded-circle"
                      alt=""
                    />
                    <div className="media-body ml-3">
                      <a href="/user">{post.userId}</a>
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
                    {/* <button
                      type="button"
                      className="showComment btn btn-secondary"
                      onClick={() => {
                        // getAllComment(post.id);
                      }}
                    >
                      Voir les commentaires
                    </button> */}
                    <Accordion
                      postId={post.id}
                      // onClick={() => {
                      //   getAllComment(post.id);
                      // }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Inputpost />
    </div>
  );
}

export default Card;
