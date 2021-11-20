import "../styles/form.css";
import { userEdit, userDelete } from "../service/login";
import { useState, useRef } from "react";

function Profile({ currentUser, changePageToUserEdit, setCurrentUser }) {
  const [inputs, setInputs] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,

    // mail: "",
    // birthday: "",
    // password: "",
  });

  const fileInput = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profilePicture", fileInput.current.files[0]);
    formData.append("firstName", inputs.firstName);
    formData.append("lastName", inputs.lastName);
    try {
      const editedUser = await userEdit(formData, currentUser.id);
      setCurrentUser(editedUser);
      fileInput.current.value = "";
      setInputs({
        firstName: "",
        lastName: "",
      });
      changePageToUserEdit("Home");
    } catch (error) {
      console.log(error);
    }
  };

  function User() {
    return (
      <h3>
        Vous êtes connecté en tant que :{" "}
        <span className="span-user-connect">
          {currentUser.firstName} {currentUser.lastName}
        </span>
      </h3>
    );
  }

  return (
    <>
      <div className="profile-form jumbotron w-50 m-auto">
        <form className="form-edit-profil" onSubmit={handleSubmit}>
          <h2 className="SignIn_title">
            Ici, vous pouvez mettre à jour vos{" "}
            <span className="span span-group">informations personnelles</span>{" "}
          </h2>

          <div className="ultratest">
            <User />
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="firstName">Prénom</label>
              <input
                title="firstName"
                name="firstName"
                onChange={handleChange}
                value={inputs.firstName}
                type="text"
                className="form-control "
                id="firstName"
                placeholder="Prénom"
                aria-describedby="firstName"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="lastName">Nom de famille</label>
              <input
                title="lastName"
                name="lastName"
                onChange={handleChange}
                value={inputs.lastName}
                type="text"
                className="form-control "
                id="lastName"
                placeholder="Nom de famille"
                aria-describedby="lastName"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="avatar">Importer une photo de profile :</label>
              <input
                title="avatar"
                name="avatar"
                ref={fileInput}
                type="file"
                aria-describedby="avatar"
                className="form-control-file"
                id="avatar"
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Valider
          </button>
        </form>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={() => {
            if (window.confirm("Voulez-vous vraiment effacer votre compte? ")) {
              userDelete(currentUser.id);
              window.location.reload();
            }
          }}
        >
          Supprimer le profil
        </button>
      </div>
    </>
  );
}
export default Profile;
