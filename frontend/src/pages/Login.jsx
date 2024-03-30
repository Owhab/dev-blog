import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="#">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <button>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
