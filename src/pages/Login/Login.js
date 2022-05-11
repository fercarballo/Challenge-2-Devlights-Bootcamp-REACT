
import { LoginForm } from "./LoginForm";
import { useNavigate } from "react-router-dom";


export default function Login({onSuccess}) {
  const navigate = useNavigate();

  function onLoginFormSuccess() {
    onSuccess();
    navigate("/");

  }

  return (
    <main className="Login">
      <section className="LoginFormContainer">
        <LoginForm onSuccess={onLoginFormSuccess} />
      </section>
    </main>
  );
}