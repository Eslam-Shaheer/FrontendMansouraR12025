import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import routes from "./routes";

const Header = ({ passedTax }) => {
  const [title, setTitle] = useState("E-commerce");

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const handleChangeTitle = () => {
    setTitle("New title");
  };

  return (
    <header className="header">
      <div className="d-flex align-items-center gap-2">
        <div>
          <h1 className="text-primary">{title}</h1>
        </div>
        {/* <button onClick={handleChangeTitle}>Change title</button> */}
        <div>
          <ul>
            {routes.map((route) => (
              <li key={route.href}>
                <NavLink
                  to={route.href}
                  className={({ isActive }) => isActive && "text-primary"}
                >
                  {route.label}
                </NavLink>{" "}
              </li>
            ))}
          </ul>
        </div>
        {/* <p className="ms-4">Tax:{passedTax}</p> */}
      </div>
      <div className="d-flex gap-2 align-items-center">
        <h2>Current theme is: {theme} </h2>
        <Button
          onClick={toggleTheme}
          variant={theme == "dark" ? "outline-secondary" : "outline-primary"}
        >
          Toggle theme
        </Button>
      </div>
    </header>
  );
};

export default React.memo(Header);
