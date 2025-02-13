import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return <div>Home</div>;
};

export default Home;
