import * as S from "../LoginView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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

      <S.Background>
        <S.LoginInside>
          <S.Title>Login to Aura.</S.Title>

          <input type="email" placeholder="E-Mail"></input>
          <input type="password" placeholder="Password"></input>

          <button className="loginButton">Login</button>
          <button className="signUpButton" onClick={() => navigate("/signup")}>
            Don't have an account? <strong>Sign Up &#62;</strong>
          </button>
        </S.LoginInside>
      </S.Background>
    </div>
  );
};

export default Login;
