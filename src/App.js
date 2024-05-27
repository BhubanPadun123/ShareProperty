import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import SignupForm from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login"
import PostPropert from "./pages/PostProperty";
import JunctionPoint from "./pages/JunctionPoint";
import ErrorPage from "./pages/ErrorPage";
import GlobalNotification from "./Helper/GlobalNotification";
import UpdateProperty from "./Helper/UpdateProperty";
import MainItemViewCard from "./Helper/CardList/mainItemCard/index"
import Header from "./Header/Header";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <GlobalNotification />
        <div style={{
          height:"100vh",
          overflowY:'scroll',
          overflowX:'hidden'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/room-service" element={<PostPropert />} />
            <Route path="/post" element={<JunctionPoint />} />
            <Route path="/update" element={<UpdateProperty />} />
            <Route path="/view-room/:type" element={<MainItemViewCard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
};

export default App;
