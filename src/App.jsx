import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Store from "./pages/Store";
import QandA from "./pages/QandA";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import News from "./pages/News";
import MssnHistory from "./pages/MssnHistory";
import MssnAbuadHistory from "./pages/MssnAbuadHistory";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import SingleBlogDetail from "./pages/SIngleBlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mssn-history" element={<MssnHistory />} />
          <Route path="/mssn-abuad-history" element={<MssnAbuadHistory />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/forum" element={<QandA />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlogDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
