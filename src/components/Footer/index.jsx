import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme == "dark" ? "bg-dark text-light" : ""}`}>
      <p>&copy; 2025 Mansoura react demo. All rights reserved</p>
    </footer>
  );
};

export default React.memo(Footer);
