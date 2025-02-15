import React from "react";
import styles from "./form.module.css";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/slices/authSlice";
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    dispatch(fetchRegister(data));
    alert("user registered successfully");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("email", {
            required: "Email is required",
            minLength: {
              value: 5,
              message: "email must be at least 5 characters",
            },
            pattern: /^[a-z0-9]+@[a-z]+\.com$/,
          })}
        />
        {errors.email && (
          <p className="text-danger text-small">{errors.email.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Username</label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "username must be at least 5 characters",
            },
          })}
        />
        {errors.email && (
          <p className="text-danger text-small">{errors.email.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          {...register("password", {
            required: "password is required",
          })}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default RegistrationForm;
