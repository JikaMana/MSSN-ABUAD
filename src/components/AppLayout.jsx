import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <ToastContainer />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
