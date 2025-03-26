import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
