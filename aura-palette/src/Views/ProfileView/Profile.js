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
        <S.Title>History</S.Title>
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
          <S.Subtitle>More History &#62;</S.Subtitle>
        </S.Palettes>
      </S.History>
      <S.Favorites>
        <S.Title>Favorites</S.Title>
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
          <S.Subtitle>More Favorites &#62;</S.Subtitle>
        </S.Palettes>
      </S.Favorites>
    </div>
  );
};

export default Profile;
