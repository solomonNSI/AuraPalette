import * as S from "../ProfileView/style";
import { NavBar } from "../../Components/NavBar/NavBar";

const Profile = () => {
  return (
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar />

      <S.Title>Profile page</S.Title>
    </div>
  );
}

export default Profile;
