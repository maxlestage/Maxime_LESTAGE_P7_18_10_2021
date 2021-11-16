import "../styles/form.css";
function SignIn() {
  return (
    <>
      <div className="profile-form jumbotron w-50 m-auto">
        <form>
          <h2 className="SignIn_title">
            Vous pouvez-vous créer un compte pour partager vos idées avec
            l'équipe <span className="span span-group">Groupomania</span>
          </h2>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer01">First name</label>
              <input
                type="text"
                className="form-control "
                id="validationServer01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer02">Last name</label>
              <input
                type="text"
                className="form-control "
                id="validationServer02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email">Mail</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    @
                  </span>
                </div>
                <input
                  type="mail"
                  className="form-control"
                  id="email"
                  placeholder="Mail"
                  aria-describedby="inputGroupPrepend3"
                  required
                />
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="password">Mot de passe</label>
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="exampleFormControlFile1">
                Importer une photo de profile :
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Valider
          </button>
        </form>
      </div>
    </>
  );
}
export default SignIn;
