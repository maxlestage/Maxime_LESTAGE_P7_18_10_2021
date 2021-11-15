import "../styles/card.css";
function Inputpost() {
  return (
    <div className="card-container-input-post ">
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="post-card">
                <form className="form form-input-post">
                  <h2>
                    Vous pouvez partager vos idées avec l'équipe{" "}
                    <span className="span span-group">Groupomania</span>
                  </h2>
                  <div className="card">
                    <div className="card-body">
                      <div className="form-group  m-auto">
                        <label htmlFor="TitlePost">
                          Comment pouvons-nous vous aider ?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="TitlePost"
                          placeholder="Titre:"
                          aria-describedby="TitlePost"
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
                          type="text"
                          className="form-control"
                          id="ContentPost"
                          placeholder="Corps du message:"
                          aria-describedby="ContentPost"
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="btn">
                        <a href="#" className="btn btn-post btn-outline-dark">
                          Partager
                        </a>
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
// Faire un input dans une carte pour ajouter des posts

export default Inputpost;
