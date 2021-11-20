import { useEffect, useState } from "react";
import { getAllComment } from "../service/comment.js";
import "../styles/comment.css";
import InputComment from "./InputComment.js";

function Comment({ comment }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div key={comment.id} className="chat-message-left  pb-4">
      <div>
        <img
          src={`http://localhost:3000/images/${comment.user.profilePicture}`}
          className="rounded-circle mr-1"
          alt={`Avatar de ${comment.user.lastName} ${comment.user.firstName} `}
          width="40"
          height="40"
        />
      </div>

      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
        <div className="font-weight-bold text-left mb-1">
          {comment.user.lastName} {comment.user.firstName}
        </div>
        <p className="text-left">{comment.content}</p>
        <p className="text-left small">
          {`${new Intl.DateTimeFormat("fr-FR", options).format(
            new Date(comment.createdAt)
          )}`}
        </p>
      </div>
    </div>
  );
}

function Comments({ postId }) {
  useEffect(() => {
    getAllComment(postId).then((response) => {
      setComments(response.data);
    });
  }, [postId]);

  const [comments, setComments] = useState([]);

  function refreshComment() {
    getAllComment(postId).then((response) => {
      setComments(response.data);
    });
  }

  return (
    <>
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="chat-messages p-4">
                {comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}

                <InputComment postId={postId} onSubmit={refreshComment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
