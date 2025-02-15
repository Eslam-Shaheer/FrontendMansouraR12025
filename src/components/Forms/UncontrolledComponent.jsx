import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue.length < 3) {
      alert("email must be at least 3 characters");
      return;
    }

    if (passwordValue.length < 3) {
      alert("password must be at least 3 characters");
      return;
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
          ref={emailRef}
          minLength={3}
          maxLength={20}
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          name="password"
          ref={passwordRef}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default UncontrolledComponent;
