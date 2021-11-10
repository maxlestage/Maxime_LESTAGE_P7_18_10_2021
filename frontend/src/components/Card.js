import { useEffect, useState } from "react";
import { getAllPost } from "../service/post.js";
import { getAllComment } from "../service/comment.js";
import "../styles/card.css";
import Comment from "./Comment";

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
  return (
    <>
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
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        getAllComment(post.id);
                      }}
                    >
                      Voir les commentaires
                    </button>
                    <Comment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
