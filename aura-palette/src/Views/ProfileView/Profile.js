import * as S from "../ProfileView/style";
import React, { useState } from "react";
import { NavBar} from "../../Components/NavBar/NavBar";
import { MiniPalette } from "../../Components/MiniPalette/MiniPalette";
import { useNavigate } from "react-router-dom";

const Profile = ({ DarkMode, setIsDarkMode }) => {
  const [favoritesEnabled, setFavoritesEnabled] = useState(true);
  const [historyEnabled, setHistoryEnabled] = useState(false);
  const [settingsEnabled, setSettingsEnabled] = useState(false);
  const [buttonsEnabled, setButtonsEnabled] = useState(false);

  const navigate = useNavigate();


  var defaultBackgroundColor = "#ffffff";
  var defaultSelectedColor = "#ffffff";

  function logOut(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    //xmlhttp.open("POST", "https://164.92.237.219/auth/register/");
    //xmlhttp.open("POST", "http://127.0.0.1:8000/auth/signout/");
    xmlhttp.open("POST", "https://model-vhxzdlegrq-uc.a.run.app/auth/signout/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse)
      //localStorage.setItem('session',JSON.stringify(jsonResponse['user_token']))
      sessionStorage.removeItem('user_token')
      if(sessionStorage.getItem('user_token') ==null){
        navigate("/")
      }
    };
    xmlhttp.send()
  }

  if(DarkMode=="dark"){
    defaultBackgroundColor="#111111";
    defaultSelectedColor="#444444";

  }
  else {
    defaultBackgroundColor="#ffffff";
    defaultSelectedColor="#aaaaaa";

  }

  function showFavorites() {
    setFavoritesEnabled(true);
    setHistoryEnabled(false);
    setSettingsEnabled(false);
  }
  
  function showHistory() {
    setFavoritesEnabled(false);
    setHistoryEnabled(true);
    setSettingsEnabled(false);
  }

  function historyList(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("GET", "https://model-vhxzdlegrq-uc.a.run.app/account/gethistory/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse); 
    }
    xmlhttp.send()
  }
  function showSettings() {
    setFavoritesEnabled(false);
    setHistoryEnabled(false);
    setSettingsEnabled(true);
  }

  function showButtons() {
    if(buttonsEnabled)
      setButtonsEnabled(false);
    else
      setButtonsEnabled(true);
  }

  return (
    <S.AppBackground id="background" className = {DarkMode}>
      <NavBar className="navbar" DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>
      <S.SettingsClosed className = {DarkMode} onClick={showButtons}> <div>Show/Hide Profile Tabs </div></S.SettingsClosed>
      <S.Settings className = {DarkMode} style = {{display: buttonsEnabled ? "flex" : "none" }}>
        <div>
        <S.Title className = {DarkMode}>Profile Tabs</S.Title>
        <S.Button className = {DarkMode} style = {{backgroundColor: favoritesEnabled ? defaultSelectedColor : defaultBackgroundColor }} onClick={showFavorites}><span>Favorite Palettes</span><span className="text">See, share and use your favorite palettes.</span></S.Button>
        <S.Button className = {DarkMode} style = {{backgroundColor: historyEnabled ? defaultSelectedColor : defaultBackgroundColor }} onClick={showHistory}><span>Palette History</span><span className="text">Discover, export and manage your palette history.</span></S.Button>
        <S.Button className = {DarkMode} style = {{backgroundColor: settingsEnabled ? defaultSelectedColor : defaultBackgroundColor }} onClick={showSettings}><span>User & App Settings</span><span className="text">Access information and change your preferences.</span></S.Button>
        <S.Button className = {DarkMode} onClick={logOut} style={{backgroundColor: defaultBackgroundColor, color: "#f34a55"}}>
          <span>Log Out from Aura</span>
          <span className="text">All your data will be saved.</span>
        </S.Button>
        </div>
        
      </S.Settings>
      <S.SettingsBackground className = {DarkMode}>
      <S.SettingsForeground className = {DarkMode} style = {favoritesEnabled ? {display: "block"} : {display: "none"}}>
        <S.Title className = {DarkMode}>Favorites</S.Title>
        <S.Palettes className = {DarkMode}>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
        </S.Palettes>
      </S.SettingsForeground>

      <S.SettingsForeground className = {DarkMode} style = {historyEnabled ? {display: "block"} : {display: "none"}}>
        <S.Title className = {DarkMode}>History</S.Title>
        <S.Palettes>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
          <MiniPalette DarkMode={DarkMode}/>
        </S.Palettes>
      </S.SettingsForeground>

      <S.SettingsForeground className = {DarkMode} style = {settingsEnabled ? {display: "block"} : {display: "none"}}>
        <S.Title className = {DarkMode}>User & App Settings</S.Title>

        <S.SettingsLine id="deneme" className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Change E-Mail Address</S.Subtitle>
            <S.Explanation className = {DarkMode}>Explanation of the user setting, what it does when clicked the switch.</S.Explanation>
          </S.Texts>
          <div className={`buttons ${DarkMode}`}>
            <input className = {DarkMode} type="email" placeholder="Enter new e-mail"></input>
            <button className = {DarkMode} >Change E-Mail</button>
          </div>
        </S.SettingsLine>

        <S.CheckboxLine className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Enable Some Mode or Another Setting</S.Subtitle>
            <S.Explanation className = {DarkMode}>Explanation of the user setting, what it does when clicked the switch.</S.Explanation>
          </S.Texts>
          <S.Label className = {DarkMode}>
            <input type="checkbox"></input>
            <span className={`slider ${DarkMode}`}></span>
          </S.Label>
        </S.CheckboxLine>

        <S.CheckboxLine className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Enable Some Mode or Another Setting</S.Subtitle>
            <S.Explanation className = {DarkMode}>Explanation of the user setting, what it does when clicked the switch.</S.Explanation>
          </S.Texts>
          <S.Label className = {DarkMode}>
            <input type="checkbox"></input>
            <span className={`slider ${DarkMode}`}></span>
          </S.Label>
        </S.CheckboxLine>

        <S.CheckboxLine className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Enable Some Mode or Another Setting</S.Subtitle>
            <S.Explanation className = {DarkMode}>Explanation of the user setting, what it does when clicked the switch.</S.Explanation>
          </S.Texts>
          <S.Label className = {DarkMode}>
            <input type="checkbox"></input>
            <span className={`slider ${DarkMode}`}></span>
          </S.Label>
        </S.CheckboxLine>

        <S.CheckboxLine className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Enable Some Mode or Another Setting</S.Subtitle>
            <S.Explanation className = {DarkMode}>Explanation of the user setting, what it does when clicked the switch.</S.Explanation>
          </S.Texts>
          <S.Label className = {DarkMode}>
            <input type="checkbox"></input>
            <span className={`slider ${DarkMode}`}></span>
          </S.Label>
        </S.CheckboxLine>
      </S.SettingsForeground>
      </S.SettingsBackground>
    </S.AppBackground>
  );
};

export default Profile;
