import * as S from "../SignUpView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import SpinnerOverlay from '../../Components/Styler';

const SignUp = ({ DarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[passwordConfirmation,setPasswordConfirmation] = useState("");
  const[shortPasswordAlert, setShortPasswordAlert] = useState(true);
  const[samePasswordAlert, setSamePasswordAlert] = useState(true);

  const handleKeyDownShortPassword = (event) => {
    setShortPasswordAlert(false)
  };

  const handleKeyDownSamePassword = (event) => {
    setSamePasswordAlert(false)
  };
  const[isLoading, setIsLoading] = useState(false);

  function sendRegisterInfo(){
        setIsLoading(true); 
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 

        xmlhttp.open("POST", "https://may22-vhxzdlegrq-uc.a.run.app/auth/register/");
        
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var registerInfo = '{ "name" : "' + name + '", "email" : "' + email + '", "password" : "' + password + '"}';
        xmlhttp.onload  = function() {
          var jsonResponse = xmlhttp.response;
          jsonResponse = JSON.parse(jsonResponse)
          if(jsonResponse['code'] == null){
            sessionStorage.setItem('user_token',JSON.stringify(jsonResponse['user_token']))

            if(sessionStorage.getItem('user_token') != null){
              setIsLoading(false);
              navigate("/")
            }
          }
        }
        if(password.length >= 6){
          if(password === passwordConfirmation)
            xmlhttp.send(registerInfo)
          else{
            setIsLoading(false);
            setSamePasswordAlert(true)
          }
        }
        else{
          setIsLoading(false);
          setShortPasswordAlert(true)
        }
          
  }

  return (
    <S.AppBackground className = {DarkMode}>
      {isLoading && <SpinnerOverlay />}
      <NavBar  DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>
      <S.Background className = {DarkMode}>
        <S.SignUpInside className = {DarkMode}>
          <S.Title className = {DarkMode}>Sign Up to Aura.</S.Title>
          <input id="name" type="text" className = {DarkMode} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
          <input id="email" type="email" className = {DarkMode} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
          <input id="password" type="password" className = {DarkMode} placeholder="Password" onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDownShortPassword}></input>
          <p className="errmsg" style = {{display: shortPasswordAlert ? "flex" : "none" }}>Password must have at least 6 characters.</p>
          <input type="password" className = {DarkMode} placeholder="Confirm Password" onChange={(e) => setPasswordConfirmation(e.target.value)} onKeyDown={handleKeyDownSamePassword}></input>
          <p className="errmsg" style = {{display: samePasswordAlert ? "flex" : "none" }}>Passwords must match.</p>

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
