import { createContext, useState } from "react";

export const UserContext = createContext();

const API_URL = "http://localhost:5001/api";

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const login = token !== "";

  const loginUser = async (email, password) => {
    try {
      const respuesta = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await respuesta.json();

      if (!respuesta.ok) {
        alert(data.message || "Error al iniciar sesión");
        return false;
      }

      setToken(data.token);
      setEmail(data.email);

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      alert("Sesión iniciada correctamente");
      return true;
    } catch (error) {
      console.log("Error en login:", error);
      alert("Error al conectar con el servidor");
      return false;
    }
  };

  const registerUser = async (email, password) => {
    try {
      const respuesta = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await respuesta.json();

console.log("RESPUESTA REGISTER:", data);
console.log("STATUS REGISTER:", respuesta.status);

if (!respuesta.ok) {
  alert(
    data.message ||
    data.error ||
    data.msg ||
    "Error al registrar usuario"
  );
  return false;
}

      setToken(data.token);
      setEmail(data.email);

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      alert("Usuario registrado correctamente");
      return true;
    } catch (error) {
      console.log("Error en register:", error);
      alert("Error al conectar con el servidor");
      return false;
    }
  };

  const logout = () => {
    setToken("");
    setEmail("");

    localStorage.removeItem("token");
    localStorage.removeItem("email");

    alert("Sesión cerrada correctamente");
  };

  const getProfile = async () => {
    try {
      const respuesta = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await respuesta.json();

      if (!respuesta.ok) {
        alert(data.message || "Error al obtener el perfil");
        return null;
      }

      return data;
    } catch (error) {
      console.log("Error en profile:", error);
      alert("Error al conectar con el servidor");
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        loginUser,
        registerUser,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;