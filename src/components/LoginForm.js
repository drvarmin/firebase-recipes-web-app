import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

function LoginForm({ existingUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, logoutUser } = FirebaseAuthService;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    logoutUser();
  };

  const handleSendResetPasswordEmail = async () => {
    if (!username) {
      alert("missing username");
      return;
    }
    try {
      await FirebaseAuthService.sendPasswordResetEmail(username);
      alert("sent the password reset email");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await FirebaseAuthService.loginWithGoogle();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-form-container">
      {existingUser ? (
        <div className="row">
          <h3>Welcome, {existingUser.email}</h3>
          <button
            type="button"
            className="primary-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <label className="input-label login-label">
            username (email):
            <input
              type="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-text"
            />
          </label>
          <label className="input-label login-label">
            password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-text"
            />
          </label>
          <div className="button-box">
            <button className="primary-button" type="submit">
              Login
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={handleLoginWithGoogle}
            >
              Login with google
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={handleSendResetPasswordEmail}
            >
              Reset password
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
