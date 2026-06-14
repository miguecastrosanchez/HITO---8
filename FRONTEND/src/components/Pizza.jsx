import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function Pizza() {
  const { id } = useParams();

  const [pizza, setPizza] = useState(null);

  const { agregarPizza } = useContext(CartContext);

  const apiUrl = "https://hito-4.onrender.com/api/pizzas/" + id;

  const getPizzaSelect = async () => {
    const respuesta = await fetch(apiUrl);
    const data = await respuesta.json();

    console.log("LA PIZZA SELECCIONADA ES:", data);

    setPizza(data);
  };

  useEffect(() => {
    getPizzaSelect();
  }, [id]);

  if (pizza === null) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <p className="mt-3 text-center">Cargando pizza...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={`/pizzas/${pizza.id}.png`}
                  className="img-fluid h-100 w-100 object-fit-cover"
                  alt={pizza.name}
                />
              </div>

              <div className="col-md-7">
                <div className="card-body p-4">
                  <h2 className="card-title fw-bold mb-3">
                    Pizza {pizza.name}
                  </h2>

                  <h4 className="text-dark mb-3">
                    Precio: ${pizza.price.toLocaleString("es-CL")}
                  </h4>

                  <hr />

                  <h5 className="fw-bold">Ingredientes:</h5>

                  <p className="fs-5">🍕 {pizza.ingredients.join(", ")}</p>

                  <h5 className="fw-bold mt-4">Descripción:</h5>

                  <p className="text-muted fs-6">{pizza.desc}</p>

                  <div className="d-grid gap-3 mt-4">
                    <Button
                      variant="dark"
                      size="lg"
                      onClick={() => agregarPizza(pizza)}
                    >
                      Añadir al carrito 🛒
                    </Button>

                    <Link to="/" className="d-grid gap-3 mt-4">
                      <Button variant="outline-dark" size="lg">
                        Volver a la tienda 👀
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;