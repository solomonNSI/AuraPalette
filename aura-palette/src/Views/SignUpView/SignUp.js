import * as S from "../SignUpView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignUp = ({ DarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  function sendRegisterInfo(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "https://arm-vhxzdlegrq-ew.a.run.app/auth/register/");
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
      <S.AppBackground className = {DarkMode}>
      <NavBar  DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>

      <S.Background className = {DarkMode}>
        <S.SignUpInside className = {DarkMode}>
          <S.Title className = {DarkMode}>Sign Up to Aura.</S.Title>
          <input id="name" type="text" className = {DarkMode} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
          <input id="email" type="email" className = {DarkMode} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
          <input id="password" type="password" className = {DarkMode} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
          <input type="password" className = {DarkMode} placeholder="Confirm Password"></input>

          <button className={`signUpButton ${DarkMode}`} onClick={() => sendRegisterInfo()}>Sign Up</button>
          <button className={`loginButton ${DarkMode}`} onClick={() => navigate("/login")}>
            Already have an account? <strong>Login {">"}</strong>
          </button>
        </S.SignUpInside>
      </S.Background>
    </S.AppBackground>
  );
};

export default SignUp;
