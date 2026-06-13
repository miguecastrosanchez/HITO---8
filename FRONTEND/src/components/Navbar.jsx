import Button from "react-bootstrap/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { UserContext } from "../context/UserContext.jsx";

function Navbar() {
  const navigate = useNavigate();

  const { total } = useContext(CartContext);
  const { login, email, logout } = useContext(UserContext);

  const logOut = () => {
    logout();
    navigate("/Login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white text-decoration-none fw-bold">
            Pizzeria Mamma Mia!
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "btn btn-light me-2" : "btn btn-dark me-2"
                  }
                >
                  🍕 Home
                </NavLink>
              </li>

              {login ? (
                <li className="nav-item">
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) =>
                      isActive ? "btn btn-light me-2" : "btn btn-dark me-2"
                    }
                  >
                    🔒 Profile
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/Register"
                    className={({ isActive }) =>
                      isActive ? "btn btn-light me-2" : "btn btn-dark me-2"
                    }
                  >
                    🔐 Register
                  </NavLink>
                </li>
              )}

              {login ? (
                <li className="nav-item">
                  <Button variant="dark" className="me-2" onClick={logOut}>
                    🔓 Logout
                  </Button>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/Login"
                    className={({ isActive }) =>
                      isActive ? "btn btn-light me-2" : "btn btn-dark me-2"
                    }
                  >
                    🔐 Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <span className="text-white fw-bold ms-3">
            {login ? email : "No logeado"}
          </span>

          <div className="Carrito">
            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                isActive ? "btn btn-light me-2" : "btn btn-dark me-2"
              }
            >
              🛒 Total: ${total.toLocaleString("es-CL")}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;