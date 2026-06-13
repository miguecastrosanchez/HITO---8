import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

function Profile() {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = () => {
    logout();
    navigate("/Login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div
        className="card shadow-lg border-0"
        style={{
          width: "28rem",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <div className="card-body">
          <h1 className="text-center mb-4 fw-bold">
            Perfil de Usuario
          </h1>

          <div className="mb-4">
            <label className="form-label fw-bold">Email</label>
            <div className="form-control py-3">
              {email || "No hay email registrado"}
            </div>
          </div>

          <button
            className="btn btn-dark w-100 py-2 fw-bold"
            onClick={logOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;