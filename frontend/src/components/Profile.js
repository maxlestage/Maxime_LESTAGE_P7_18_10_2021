import "../styles/form.css";
function Profile() {
  return (
    <>
      <div className="profile-form jumbotron w-50 m-auto">
        <form>
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
          </div>
          <div className="form-row">
            <div className="form-group">
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
export default Profile;
