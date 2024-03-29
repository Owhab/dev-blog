import React from "react";

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
      </form>
    </div>
  );
};

export default Login;
