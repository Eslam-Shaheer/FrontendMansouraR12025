import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setErrors({ ...errors, email: "" });
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setErrors({ ...errors, password: "" });
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length < 3) {
      setErrors((prevState) => {
        return {
          ...prevState,
          email: "email must be at least 3 characters",
        };
      });
    }
    if (password.length < 3) {
      setErrors((prevState) => {
        return {
          ...prevState,
          password: "password must be at least 3 characters",
        };
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          name="email"
          onChange={handleEmailChange}
          onBlur={() => setErrors((prev) => ({ ...prev, email: "" }))}
        />
        {errors.email && (
          <p className="text-danger text-small">{errors.email}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
        />
        {errors.password && (
          <p className="text-danger text-small">{errors.password}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
