import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/slices/authSlice";

const ReactHookForm = () => {
  const { loginError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    watch,
    reset,
    setValue,
    handleSubmit,
  } = useForm({});
  //   console.log(watch(), "watch");

  // const handleSubmit =(onSubmit)=>{
  //     const data={email:"Eslam",password:"12345"}
  //     onSubmit(data)
  // }

  useEffect(() => {}, []);
  const onSubmit = (data) => {
    dispatch(fetchLogin(data))
      .unwrap()
      .then(() => {
        alert("user logged in successfully");
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
      });
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
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          {...register("password", {
            required: "Email is required",
          })}
        />
      </div>
      {loginError && <p className="text-danger">{loginError}</p>}
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default ReactHookForm;
