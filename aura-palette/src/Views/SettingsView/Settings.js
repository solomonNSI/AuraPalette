import * as S from "../SettingsView/style";
import { NavBar } from "../../Components/NavBar/NavBar";

const Settings = () => {
  return (
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar />

      <S.Title>Settings page</S.Title>
    </div>
  );
}

export default Settings;
