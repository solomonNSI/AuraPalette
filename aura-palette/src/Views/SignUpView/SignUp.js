import * as S from "../SignUpView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
        <S.SignUpInside>
          <S.Title>Sign Up to Aura.</S.Title>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="E-Mail"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Confirm Password"></input>

          <button className="loginButton">Sign Up</button>
          <button className="signUpButton" onClick={() => navigate("/login")}>
            Already have an account? <strong>Login &#62;</strong>
          </button>
        </S.SignUpInside>
      </S.Background>
    </div>
  );
};

export default SignUp;
