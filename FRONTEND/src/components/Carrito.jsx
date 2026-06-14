import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext.jsx";

const API_URL = "http://localhost:5001/api";

function Carrito() {
  const {
    carrito,
    agregarPizza,
    quitarPizza,
    total,
    limpiarCarrito,
  } = useContext(CartContext);

  const { login, token } = useContext(UserContext);

  const [mensaje, setMensaje] = useState("");

  const pagarCarrito = async () => {
    if (!login) {
      alert("Debes iniciar sesión para comprar");
      return;
    }

    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    try {
      const respuesta = await fetch(`${API_URL}/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: carrito,
        }),
      });

      const data = await respuesta.json();

      console.log("RESPUESTA CHECKOUT:", data);
      console.log("STATUS CHECKOUT:", respuesta.status);

      if (!respuesta.ok) {
        alert(data.message || data.error || "Error al realizar la compra");
        return;
      }

      setMensaje("Compra realizada con éxito 🍕");
      limpiarCarrito();
    } catch (error) {
      console.log("Error en checkout:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1>CARRITO DE COMPRAS</h1>

        {mensaje && (
          <div className="alert alert-success mt-4">
            {mensaje}
          </div>
        )}

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
                          <p className="mb-0">
                            {p.ingredients.join(", ")}
                          </p>
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
                {login ? (
                  <button className="btn btn-dark" onClick={pagarCarrito}>
                    Pagar
                  </button>
                ) : (
                  <p className="text-muted">
                    Inicia sesión para proceder al pago.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Carrito;