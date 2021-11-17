import { postComment } from "../service/comment";
import { useState } from "react";
function InputComment({ postId, onSubmit }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postComment(postId, inputs);
      setInputs({});
      onSubmit();
    } catch (error) {
      console.log(error);
    }

    // window.location.reload(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-grow-0 py-3 px-4 border-top">
        <div className="input-group">
          {/* <label for="Give your idea">Partagez votre avis :</label> */}
          <input
            title="content"
            name="content"
            onChange={handleChange}
            value={inputs.content || ""}
            aria-label="Partagez votre avis"
            type="text"
            className="form-control"
            placeholder="Partagez votre avis :"
          />
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputComment;
