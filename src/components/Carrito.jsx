import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext.jsx";

function Carrito() {
  
  const { carrito, agregarPizza, quitarPizza, total } = useContext(CartContext);
  console.log("CARRITO ACTUAL:", carrito);

  const{login, setLogin} = useContext(UserContext);


  return (
    <>
      <div className="container mt-4">
        <h1>CARRITO DE COMPRAS</h1>

        {carrito.length === 0 ? (
          <div className="alert alert-warning mt-4">
            Tu carrito está vacío. Agrega una pizza para comenzar.
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <ul className="p-0">
                {carrito.map((p) => (
                  <li
                    key={p.id}
                    className="border rounded mt-2 p-3"
                    style={{ listStyle: "none" }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                          src={p.img}
                          alt={p.name}
                        />

                        <div>
                          <h5 className="mb-1">{p.name}</h5>
                          <p className="mb-0">{p.ingredients.join(", ")}</p>
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => quitarPizza(p.id)}
                          >
                            -
                          </button>

                          <span className="fw-bold">{p.count}</span>

                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => agregarPizza(p)}
                          >
                            +
                          </button>
                        </div>

                        <p className="mt-2 mb-0 fw-bold">
                          ${(p.price * p.count).toLocaleString("es-CL")}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-end mt-4">
                <h2>TOTAL: ${total.toLocaleString("es-CL")}</h2>
              </div>

              <div className="text-end">
                {
                  login ? <button className="btn btn-dark">Pagar</button> : <p className="text-muted">Inicia sesión para proceder al pago.</p>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Carrito;