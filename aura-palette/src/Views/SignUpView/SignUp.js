import * as S from "../SignUpView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignUp = ({ DarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[passwordConfirmation,setPasswordConfirmation] = useState("");

  function sendRegisterInfo(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 

    xmlhttp.open("POST", "https://model-vhxzdlegrq-uc.a.run.app/auth/register/");
    //xmlhttp.open("POST", "http://127.0.0.1:8000/auth/register/");

    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var registerInfo = '{ "name" : "' + name + '", "email" : "' + email + '", "password" : "' + password + '"}';
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse)
      if(jsonResponse['code'] == null){
        sessionStorage.setItem('user_token',JSON.stringify(jsonResponse['user_token']))

        if(sessionStorage.getItem('user_token') != null){
          navigate("/")
        }
      }
      else{
        console.log(jsonResponse)
      }
    };
    if(password.length >= 8){
      if(password === passwordConfirmation)
        xmlhttp.send(registerInfo)
      else
        console.log("Passwords must match")
    }
    else
      console.log("Password must have at least 6 characters")
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
          <input type="password" className = {DarkMode} placeholder="Confirm Password" onChange={(e) => setPasswordConfirmation(e.target.value)}></input>

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
