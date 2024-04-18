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

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarHook />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
