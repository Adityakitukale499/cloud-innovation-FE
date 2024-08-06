import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import "../Style/LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className="login-container">
      <div className="card-container">
        <div className="login-card">
          <h1 className="heading-text">Log In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_login">Username</label>
              <input
                type="text"
                name="username"
                id="user_login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_pass">Password</label>
              <input
                type="password"
                name="password"
                id="user_pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
