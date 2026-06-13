import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import E404 from "./pages/E404";
import Profiles from "./pages/Profiles";
import PizzaDetail from "./pages/pizzadetail";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { login } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={login ? <Home /> : <Login />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={login ? <Home /> : <Register />} />
        <Route path="/Profile" element={login ? <Profiles /> : <Login />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </>
  );
}

export default App;