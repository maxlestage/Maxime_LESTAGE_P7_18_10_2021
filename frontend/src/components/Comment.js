import { getAllComment, postComment } from "../service/comment.js";
import "../styles/comment.css";

function Comment() {
  return (
    <>
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div class="chat-messages p-4">
                <div class="chat-message-right mb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      class="rounded-circle mr-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div class="text-muted small text-nowrap mt-2">2:43 am</div>
                  </div>
                  <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div class="font-weight-bold mb-1">You</div>
                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                    prodesset te vix.
                  </div>
                </div>
                <div class="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      class="rounded-circle mr-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div class="text-muted small text-nowrap mt-2">2:44 am</div>
                  </div>
                  <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                    erat animal commodo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
