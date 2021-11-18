import "../styles/form.css";
import { userSignUp } from "../service/login";
import { useState, useRef } from "react";

function SignUp({ onSignUp }) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    birthday: "",
    password: "",
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
    formData.append("mail", inputs.mail);
    formData.append("password", inputs.password);
    formData.append("birthday", inputs.birthday);
    try {
      await userSignUp(formData);
      setInputs({});
      onSignUp();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="profile-form jumbotron w-50 m-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="SignIn_title">
            Vous pouvez-vous créer un compte pour partager vos idées avec
            l'équipe <span className="span span-group">Groupomania</span>
          </h2>
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
                required
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
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="birthday">Anniversaire</label>
              <input
                title="birthday"
                name="birthday"
                onChange={handleChange}
                value={inputs.birthday}
                type="date"
                className="form-control "
                id="birthday"
                aria-describedby="birthday"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email">eMail</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="email">
                    @
                  </span>
                </div>
                <input
                  title="mail"
                  name="mail"
                  onChange={handleChange}
                  value={inputs.mail}
                  type="mail"
                  className="form-control"
                  id="email"
                  placeholder="Mail"
                  required
                />
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="password">Mot de passe</label>
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input
                  title="password"
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="password"
                  placeholder="・・・・・・"
                  required
                />
              </div>
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
      </div>
    </>
  );
}
export default SignUp;
