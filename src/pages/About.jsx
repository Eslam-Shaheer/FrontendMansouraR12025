import React, { useEffect } from "react";
import SocialInfo from "../components/About/SocialInfo";

const About = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("About component");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>About</div>;
};

export default About;
