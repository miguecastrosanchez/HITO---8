import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

function Formregister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const { registerUser } = useContext(UserContext);

  const navigate = useNavigate();

  const validarForm = async (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmpassword === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña tiene que tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmpassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const registroCorrecto = await registerUser(email, password);

    if (registroCorrecto) {
      setEmail("");
      setPassword("");
      setConfirmpassword("");
      navigate("/");
    }
  };

  return (
    <>
      <section className="Register-section">
        <form className="Register" onSubmit={validarForm}>
          <h2>Formulario de Registro</h2>

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
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <label htmlFor="confirmPassword">Password Confirm</label>
          <br />
          <input
            type="password"
            placeholder="******"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />

          <br />

          <Button variant="dark" type="submit">
            Register
          </Button>
        </form>
      </section>
    </>
  );
}

export default Formregister;