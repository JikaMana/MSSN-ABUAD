import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Store from "./pages/Store";
import QandA from "./pages/QandA";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Admin from "./pages/Admin";
import News from "./pages/News";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/forum" element={<QandA />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute>
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;