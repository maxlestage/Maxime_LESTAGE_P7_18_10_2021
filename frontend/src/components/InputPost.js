import "../styles/card.css";
import { postByUser } from "../service/post";
import { useState, useRef } from "react";

function Inputpost({ onSubmit }) {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const fileInput = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await postByUser(inputs);
  //     setInputs({});
  //     onSubmit();
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // window.location.reload(false);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("content", inputs.content);
    formData.append("profilePicture", fileInput.current.files[0]);

    try {
      await postByUser(formData);
      fileInput.current.value = "";
      setInputs({});
      onSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-container-input-post ">
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="post-card">
                <form className="form form-input-post" onSubmit={handleSubmit}>
                  <div>
                    <h2>
                      Vous pouvez partager vos idées avec l'équipe{" "}
                      <span className="span span-group">Groupomania</span>
                    </h2>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="form-group  m-auto">
                        <label htmlFor="TitlePost">
                          Comment pouvons-nous vous aider ?
                        </label>
                        <input
                          title={"title"}
                          name={"title"}
                          type="text"
                          value={inputs.title || ""}
                          onChange={handleChange}
                          className="form-control"
                          id="TitlePost"
                          placeholder="Titre"
                          aria-describedby="TitlePost"
                          required
                        />
                        <small id="TitlePost" className="form-text text-muted">
                          Le choix d'un bon titre est important.
                        </small>
                      </div>

                      <div className="form-group m-auto">
                        <label htmlFor="ContentPost">
                          Dites-nous ce qui vous passe par la tête.
                        </label>
                        <input
                          title={"content"}
                          name={"content"}
                          type="text"
                          value={inputs.content || ""}
                          onChange={handleChange}
                          className="form-control"
                          id="ContentPost"
                          placeholder="Message"
                          aria-describedby="ContentPost"
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="gif">
                          Importer une photo de profile :
                        </label>
                        <input
                          title="gif"
                          name="gif"
                          ref={fileInput}
                          type="file"
                          aria-describedby="gif"
                          className="form-control-file"
                          id="gif"
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="btn">
                        <button
                          type="submit"
                          className="btn btn-post btn-outline-dark"
                          // onClick={() => {
                          //   postByUser();
                          // }}
                        >
                          Partager
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputpost;
