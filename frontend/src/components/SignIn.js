import { useState } from "react";
import { userLogin } from "../service/login";

function SignIn({ onSignIn }) {
  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("mail", inputs.mail);
    formData.append("password", inputs.password);
    try {
      await userLogin(inputs);
      setInputs({ mail: "", password: "" });
      onSignIn();
      window.location.reload();
    } catch (error) {
      alert("");
    }

    // window.location.reload(false);
  };

  return (
    <div className="profile-form jumbotron w-50 m-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="SignIn_title">
          Connectez-vous pour partager vous idées avec les membres de{" "}
          <span className="span span-group">Groupomania</span>
        </h2>
        <div className="form-group m-auto">
          <div>
            <label htmlFor="email">Mail</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupMail">
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
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                placeholder="Mail"
                aria-describedby="inputGroupMail"
                required
              />
            </div>
          </div>
          <div>
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
                placeholder="password"
                required
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-SignIn" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}

export default SignIn;
