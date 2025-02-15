import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import UncontrolledComponent from "../components/Forms/UncontrolledComponent";
import ReactHookForm from "../components/Forms/ReactHookForm";

const Login = () => {
  return (
    <>
      <h3>Use form component</h3>
      <ReactHookForm />
      <br />
      <br />
      <br />
      <h3>Controlled Component</h3>
      <LoginForm />;
      <br />
      <br />
      <br />
      <h3>Uncontrolled Component</h3>
      <UncontrolledComponent />
    </>
  );
};

export default Login;
