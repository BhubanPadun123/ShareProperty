import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Home";
import News from "./pages/News";
import SignupForm from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login"
import PostPropert from "./pages/PostProperty";
import JunctionPoint from "./pages/JunctionPoint";
import ErrorPage from "./pages/ErrorPage";
import GlobalNotification from "./Helper/GlobalNotification";

const App = () => {
  return (
    <Router>
      <NavbarHook />
      <GlobalNotification />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room-service" element={<PostPropert />} />
          <Route path="/post" element={<JunctionPoint />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
