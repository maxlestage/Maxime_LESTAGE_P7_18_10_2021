import "../styles/card.css";
// import { postByUser } from "../service/post";
import { useState } from "react";

function Inputpost({ parentCallBack }) {
  const [formData, setFormData] = useState({ title: "", content: "" });

  // useEffect(() => {
  //   postByUser().then((response) => {
  //     setFormData(response.data);
  //   });
  // }, []);

  function handleSubmit() {
    parentCallBack(formData);
    setFormData({ title: "", content: "" });
  }

  // const [value, setValue] = useState('');
  const onChange = (title, event) => {
    setFormData({
      ...formData,
      [title]: event.target.value,
    });
  };

  // function handleSubmit() {
  //   postByUser(formData);
  // }

  // console.log(formData);

  return (
    <div className="card-container-input-post ">
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="post-card">
                <form
                  // formData={formData}
                  className="form form-input-post"
                  onSubmit={(event) => {
                    handleSubmit(formData);
                    event.preventDefault();
                  }}
                >
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
                          className="form-control"
                          id="TitlePost"
                          placeholder="Titre:"
                          aria-describedby="TitlePost"
                          value={formData.title}
                          onChange={(event) => {
                            onChange("title", event);
                          }}
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
                          className="form-control"
                          id="ContentPost"
                          placeholder="Corps du message:"
                          aria-describedby="ContentPost"
                          value={formData.content}
                          onChange={(event) => {
                            onChange("content", event);
                          }}
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
