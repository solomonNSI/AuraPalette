import * as S from "../LoginView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { json, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  function sendLoginInfo(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://164.92.237.219:8000/auth/signin/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var loginInfo = '{"email" : "' + email + '", "password" : "' + password + '"}';
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse)
      localStorage.setItem('session',JSON.stringify(jsonResponse['user_token']))
    };
    xmlhttp.send(loginInfo)
  }

  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavBar />

      <S.Background>
        <S.LoginInside>
          <S.Title>Login to Aura.</S.Title>

          <input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>

          <button className="loginButton" onClick={() => sendLoginInfo()}>Login</button>
          <button className="signUpButton" onClick={() => navigate("/signup")}>
            Don't have an account? <strong>Sign Up {">"}</strong>
          </button>
        </S.LoginInside>
      </S.Background>
    </div>
  );
};

export default Login;
