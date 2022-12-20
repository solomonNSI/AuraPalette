import * as S from "../SignUpView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  function sendRegisterInfo(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "https://164.92.237.219:8000/auth/register/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var registerInfo = '{ "name" : "' + name + '", "email" : "' + email + '", "password" : "' + password + '"}';
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse)
      localStorage.setItem('session',JSON.stringify(jsonResponse['user_token']))
      console.log(localStorage.getItem('session'))
    };
    xmlhttp.send(registerInfo)
  }


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
        <S.SignUpInside>
          <S.Title>Sign Up to Aura.</S.Title>
          <input id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
          <input id="email" type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
          <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
          <input type="password" placeholder="Confirm Password"></input>

          <button className="signUpButton" onClick={() => sendRegisterInfo()}>Sign Up</button>
          <button className="loginButton" onClick={() => navigate("/login")}>
            Already have an account? <strong>Login {">"}</strong>
          </button>
        </S.SignUpInside>
      </S.Background>
    </div>
  );
};

export default SignUp;
