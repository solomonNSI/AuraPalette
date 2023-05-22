import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./Views/AppView/App";
import Login from "./Views/LoginView/Login";
import Profile from "./Views/ProfileView/Profile";
import SignUp from "./Views/SignUpView/SignUp";
import About from "./Views/AboutView/About";


export default function Root() {

  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if(!hasCookie('darkmode'))
  {
    if(prefersDarkMode )
      setCookie("darkmode", "dark", 1);
    else
      setCookie("darkmode", "light", 1);
  }
  

  const darkModeValue = getCookie('darkmode');
  if(darkModeValue=="dark")
    var darkModeBool = true
  else
    var darkModeBool = false

  const [DarkMode, setIsDarkMode] = useState(darkModeBool ? "dark" : "light");
  
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  function hasCookie(name) {
    const matches = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return Boolean(matches && matches[2]);
  }
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="profile" element={<Profile DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="signup" element={<SignUp DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="login" element={<Login DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="about" element={<About DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
