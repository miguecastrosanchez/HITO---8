import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

function ComLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Debes completar todos los campos");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña tiene que tener al menos 6 caracteres");
      return;
    }

    const loginCorrecto = await loginUser(email, password);

    if (loginCorrecto) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <>
      <section className="login-section">
        <form className="Login" onSubmit={handSubmit}>
          <h2>Login</h2>

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            placeholder="ejemplo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <Button variant="dark" type="submit">
            Iniciar Sesión
          </Button>
        </form>
      </section>
    </>
  );
}

export default ComLogin;