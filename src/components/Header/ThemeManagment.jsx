import React from "react";

const ThemeManagment = ({ theme }) => {
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="d-flex gap-2 align-items-center">
      <h2>Current theme is: {theme} </h2>
      <Button
        onClick={toggleTheme}
        variant={theme == "dark" ? "outline-secondary" : "outline-primary"}
      >
        Toggle theme
      </Button>
    </div>
  );
};

export default ThemeManagment;
