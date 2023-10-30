import * as S from "../LoginView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import SpinnerOverlay from '../../Components/Styler';

const Login = ({DarkMode, setIsDarkMode}) => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[passwordAlert, setPasswordAlert] = useState(false);
  const[emailAlert, setEmailAlert] = useState(false);
  const[isLoading, setIsLoading] = useState(false);

  const handleKeyDownEmail = (event) => {
    setEmailAlert(false)
  };

  const handleKeyDownPassword = (event) => {
    setPasswordAlert(false)
  };

  
  function sendLoginInfo(){
        setIsLoading(true); 
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 

        xmlhttp.open("POST", "https://may22-vhxzdlegrq-uc.a.run.app/auth/signin/");
        
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var loginInfo = '{"email" : "' + email + '", "password" : "' + password + '"}';
        xmlhttp.onload  = function() {
          var jsonResponse = xmlhttp.response;
          jsonResponse = JSON.parse(jsonResponse)
          //localStorage.setItem('session',JSON.stringify(jsonResponse['user_token']))
          if(jsonResponse['code'] == null){
            sessionStorage.setItem('user_token',JSON.stringify(jsonResponse['user_token']))

            if(sessionStorage.getItem('user_token') != null){
              setIsLoading(false);
              navigate("/")
            }
          }
          else{
            setIsLoading(false);
            if(jsonResponse['err_msg'] == "INVALID_PASSWORD"){
              setIsLoading(false);
              setPasswordAlert(true);
            }

            if(jsonResponse['err_msg'] == "EMAIL_NOT_FOUND"){
              setIsLoading(false);
              setEmailAlert(true);
            }
            // ERROR WAS RAISED

          }
          if(sessionStorage.getItem('user_token') != null){
          setIsLoading(false);
            navigate("/");
          }
        };
        xmlhttp.send(loginInfo)
    }   


  const navigate = useNavigate();
  return (
    <S.AppBackground className = {DarkMode}>
      {isLoading && <SpinnerOverlay />}
    
      <NavBar DarkMode={DarkMode} setIsDarkMode={setIsDarkMode} />

      <S.Background className = {DarkMode}>
        <S.BackButton onClick={() => navigate("/")}>go back</S.BackButton>
        <S.LoginInside>
          <S.Title className = {DarkMode}>Login to Aura.</S.Title>

          <input type="email" placeholder="E-Mail" className = {DarkMode} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDownEmail}></input>
          <p className="errmsg" style = {{display: emailAlert ? "flex" : "none" }}>E-mail address not found.</p>
          <input type="password" placeholder="Password" className = {DarkMode} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDownPassword}></input>
          <p  className="errmsg" style = {{display: passwordAlert ? "flex" : "none" }}>Incorrect password, try again.</p>
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
