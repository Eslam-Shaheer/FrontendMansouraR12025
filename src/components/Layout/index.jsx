import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { fetchLoggedInUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, []);
  return (
    <div className="layout-container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
