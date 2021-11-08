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
              <label htmlFor="validationServerUsername">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationServerUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend3"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationServer03"
                placeholder="City"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer04">State</label>
              <input
                type="text"
                className="form-control"
                id="validationServer04"
                placeholder="State"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationServer05"
                placeholder="Zip"
                required
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
