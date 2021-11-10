function Inputpost() {
  return (
    <div className="post-card w-75">
      <form>
        <p>Vous pouvez partager vos idées ici :</p>
        <div className="card">
          <div className="form-group w-75 m-auto">
            <label htmlFor="exampleInputEmail1">
              Comment pouvons-nous vous aider ?
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Titre:"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              Le choix d'un bon titre est important.
            </small>
          </div>
          <div className="card-body">
            <div className="form-group w-75 m-auto">
              <label htmlFor="exampleInputEmail1">
                Ici, vous pouvez partager vos idées:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Corps du message:"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                Dites-nous ce qui vous passe par la tête.
              </small>
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
// Faire un input dans une carte pour ajouter des posts

export default Inputpost;
