import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./Views/AppView/App";
import Login from "./Views/LoginView/Login";
import Profile from "./Views/ProfileView/Profile";
import SignUp from "./Views/SignUpView/SignUp";

export default function Root() {
  const [DarkMode, setIsDarkMode] = useState("light");

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="profile" element={<Profile DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="signup" element={<SignUp DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="login" element={<Login DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
