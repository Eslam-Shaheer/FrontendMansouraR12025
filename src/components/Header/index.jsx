import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Header = ({ passedTax }) => {
  const [title, setTitle] = useState("E-commerce");
  const { user } = useSelector((state) => state.auth);
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const handleChangeTitle = () => {
    setTitle("New title");
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("user logged out successfully");
    navigate("/login");
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
        <h2>Hello {user?.username}</h2>
        <Button onClick={handleLogout}>Logout</Button>
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
