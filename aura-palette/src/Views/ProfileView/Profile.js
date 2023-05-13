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
    const [history, setHistory] = useState();
    const [favorites, setFavorites] = useState();
    const navigate = useNavigate();

    historyList();
    favoriteList();

    var defaultBackgroundColor = "#ffffff";
    var defaultSelectedColor = "#ffffff";

    function logOut(){
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        //xmlhttp.open("POST", "https://164.92.237.219/auth/register/");
        xmlhttp.open("POST", "https://may13-vhxzdlegrq-lz.a.run.app/auth/signout/");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.onload  = function() {
        var jsonResponse = xmlhttp.response;
        jsonResponse = JSON.parse(jsonResponse)
        //localStorage.setItem('session',JSON.stringify(jsonResponse['user_token']))
        sessionStorage.removeItem('user_token')
        if(!sessionStorage.getItem('user_token')){
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
        xmlhttp.open("GET", "https://may13-vhxzdlegrq-lz.a.run.app/account/gethistory/");
        //xmlhttp.open("GET", "https://may13-vhxzdlegrq-lz.a.run.app/account/gethistory/");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
        xmlhttp.onload  = function() {
          var jsonResponse = xmlhttp.response;
          jsonResponse = JSON.parse(jsonResponse);
          setHistory(jsonResponse)
        }
        xmlhttp.send()
    }

    function favoriteList(){
      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
      xmlhttp.open("GET", "https://may13-vhxzdlegrq-lz.a.run.app/account/getfavorites/");
      //xmlhttp.open("GET", "https://may13-vhxzdlegrq-lz.a.run.app/account/getfavorites/");
      xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
      xmlhttp.onload  = function() {
        var jsonResponse = xmlhttp.response;
        jsonResponse = JSON.parse(jsonResponse);
        setFavorites(jsonResponse)
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

    function renderFavorites(){
      var palettes = [];
      var palettes2 = [];
      var queries = [];
      if (!favorites || favorites.length === 0) {
        return (<p>There are no palettes in your favorites</p>);
      }
      var p_list = favorites['favorites']

      for (var i = 0; i < p_list.length; i++) {
        var palette = []
        palette.push(p_list[i]['color1'])
        palette.push(p_list[i]['color2'])
        palette.push(p_list[i]['color3'])
        palette.push(p_list[i]['color4'])
        palette.push(p_list[i]['color5'])
        palettes.push(palette)

        var query = (p_list[i]['query']);
        queries.push(query);
      }
      for (var i = 0; i < palettes.length; i++) {
        palettes2.push(
            <MiniPalette DarkMode={DarkMode} palette={palettes[i]} query={queries[i]}/>
        );
      }
      return palettes2;
    }

    function renderHistory(){
        var palettes = [];
        var palettes2 = [];
        var queries = [];

        if (!history || history.length === 0) {
            return (<p>There are no palettes in your history</p>);
        }
        
        var p_list = history['history']

        for (var i = 0; i < p_list.length; i++) {
          var palette = []
          palette.push(p_list[i]['color1'])
          palette.push(p_list[i]['color2'])
          palette.push(p_list[i]['color3'])
          palette.push(p_list[i]['color4'])
          palette.push(p_list[i]['color5'])
          palettes.push(palette)

          var query = (p_list[i]['query']);
          queries.push(query);
        }
        for (var i = 0; i < palettes.length; i++) {
          palettes2.push(
              <MiniPalette DarkMode={DarkMode} palette={palettes[i]} query={queries[i]}/>
          );
        }
        return palettes2;
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
          {renderFavorites()}
        </S.Palettes>
      </S.SettingsForeground>

      <S.SettingsForeground className = {DarkMode} style = {historyEnabled ? {display: "block"} : {display: "none"}}>
        <S.Title className = {DarkMode}>History</S.Title>
        <S.Palettes>
            {renderHistory()}
        </S.Palettes>
      </S.SettingsForeground>

      <S.SettingsForeground className = {DarkMode} style = {settingsEnabled ? {display: "block"} : {display: "none"}}>
        <S.Title className = {DarkMode}>User & App Settings</S.Title>

        <S.SettingsLine id="deneme" className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Change E-Mail Address</S.Subtitle>
            <S.Explanation className = {DarkMode}>You can change your e-mail address by entering a new one.</S.Explanation>
          </S.Texts>
          <div className={`buttons ${DarkMode}`}>
            <input className = {DarkMode} type="email" placeholder="Enter new e-mail"></input>
            <button className = {DarkMode} >Change</button>
          </div>
        </S.SettingsLine>

        <S.SettingsLine id="deneme" className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Change Account Password</S.Subtitle>
            <S.Explanation className = {DarkMode}>You can change your account password by entering a new one.</S.Explanation>
          </S.Texts>
          <div className={`buttons ${DarkMode}`}>
            <input className = {DarkMode} type="password" placeholder="Enter new password"></input>
            <button className = {DarkMode} >Change</button>
          </div>
        </S.SettingsLine>

        <S.CheckboxLine className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Incognito Mode</S.Subtitle>
            <S.Explanation className = {DarkMode}>When enabled, the palette history will not be saved anymore.</S.Explanation>
          </S.Texts>
          <S.Label className = {DarkMode}>
            <input type="checkbox"></input>
            <span className={`slider ${DarkMode}`}></span>
          </S.Label>
        </S.CheckboxLine>

        <S.CheckboxLine className = {DarkMode}>
          <S.Texts>
            <S.Subtitle className = {DarkMode}>Always Use Dark Mode</S.Subtitle>
            <S.Explanation className = {DarkMode}>Change the default theme to dark from light.</S.Explanation>
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
