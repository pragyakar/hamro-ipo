import React, { useState } from "react";
import CONFIG from "../config";
import Logo from "./commons/Logo";
import Footer from "./Footer";

interface ILoginProps {
  handleUserLogin: () => void;
}

const Login = (props: ILoginProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const { handleUserLogin } = props;

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setError("");
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("All fields are required");
      return;
    }
    if (username === CONFIG.user && password === CONFIG.pass) {
      handleUserLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login__form-container">
          <Logo />
          <form className="login__form">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="login__input-group">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  className="login__input login__input--top"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  className="login__input login__input--bottom"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            {error && (
              <div className="login__error">
                <p>{error}</p>
              </div>
            )}
            <div>
              <button type="submit" onClick={(e) => handleSubmit(e)} className="login__button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer fixed={true} />
    </>
  );
};

export default Login;
