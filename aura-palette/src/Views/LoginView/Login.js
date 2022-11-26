import * as S from "../LoginView/style";
import { NavBar } from "../../Components/NavBar/NavBar";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar />

      <S.Title>Login page</S.Title>
    </div>
  );
}

export default Login;
