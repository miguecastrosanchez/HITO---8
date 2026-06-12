import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { GlobalContext } from "../context/GlobalContext.jsx";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";



function Profile() {
  
  const { user, setUser } = useContext(GlobalContext);
  const { login, setLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = function(){
    
    setUser({})
    setLogin(false)
    alert("Sesión cerrada correctamente")
    navigate("/Login")

  }

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
              {user?.email || "No hay email registrado"}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Password</label>
            <div className="form-control py-3">
              {user?.password ? user.password : "No hay password registrada"}
            </div>
          </div>
        
        {/* <Button variant="dark" className="me-2" onClick={()=> logOut()}> Cerrar Session</Button> */}
        
        <button className="btn btn-dark w-100 py-2 fw-bold" onClick={()=> logOut()}>
           Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

