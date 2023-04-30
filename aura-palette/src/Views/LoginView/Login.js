import * as S from "../LoginView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Login = ({DarkMode, setIsDarkMode}) => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  function sendLoginInfo(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "https://arm-vhxzdlegrq-ew.a.run.app/auth/signin/");
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
    <S.AppBackground className = {DarkMode}>
    
      <NavBar DarkMode={DarkMode} setIsDarkMode={setIsDarkMode} />

      <S.Background className = {DarkMode}>
        <S.LoginInside>
          <S.Title className = {DarkMode}>Login to Aura.</S.Title>

          <input type="email" placeholder="E-Mail" className = {DarkMode} onChange={(e) => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Password" className = {DarkMode} onChange={(e) => setPassword(e.target.value)}></input>

          <button className={`loginButton ${DarkMode}`} onClick={() => sendLoginInfo()}>Login</button>
          <button className={`signUpButton ${DarkMode}`} onClick={() => navigate("/signup")}>
            Don't have an account? <strong>Sign Up {">"}</strong>
          </button>
        </S.LoginInside>
      </S.Background>
    </S.AppBackground>
  );
};

export default Login;
