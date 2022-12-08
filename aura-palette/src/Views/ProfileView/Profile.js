import * as S from "../ProfileView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { MiniPalette } from "../../Components/MiniPalette/MiniPalette";

const Profile = () => {
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

      <S.History>
        <S.Title>Adjustments</S.Title>
        <S.Palettes>
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <S.Subtitle>More History ></S.Subtitle>
        </S.Palettes>
      </S.History>
      <S.Favorites>
        <S.Title>Adjustments</S.Title>
        <S.Palettes>
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <MiniPalette />
          <S.Subtitle>More History ></S.Subtitle>
        </S.Palettes>
      </S.Favorites>
    </div>
  );
};

export default Profile;
