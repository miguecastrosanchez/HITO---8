import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx"; 





function Pizzas() {
  
  const {agregarPizza} = useContext(CartContext);
  
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const obtenerPizzas = await fetch("https://hito-4.onrender.com/api/pizzas");
    const data = await obtenerPizzas.json();
    console.log(data);
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>

      {pizzas.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <p className="mt-3 text-center">Cargando pizzas...</p>
          </div>
        </div>
      ) : 
      (
        <div className="container mt-5">
          <div className="row">
           
            {pizzas.map((pizza) => (
              <div className="col-md-4 mb-4 d-flex" key={pizza.id}>
                <div className="card card-pizza w-100 h-100">
                  <img
                    src={`/pizzas/${pizza.id}.png`}
                    className="card-img-top imagen-pizza"
                    alt={pizza.name}
                  />

                  <div className="card-body">
                    <div className="informacion">
                      <h2 className="text-center">Pizza {pizza.name}</h2>

                      <h5 className="card-title fw-light mb-3 text-center">
                        Ingredientes:
                      </h5>

                      <p className="ingredientes fs-6 text-center">
                        🍕 {pizza.ingredients.join(", ")}
                      </p>

                      <hr />
                    </div>

                    <div className="cont-precio-botones">
                      <div className="precio-pizza text-center fs-3">
                        Precio: ${pizza.price.toLocaleString("es-CL")}
                      </div>

                      <div className="botones-card">
                       
                        <Link to={`/pizza/${pizza.id}`}>
                          <Button variant="dark">Ver Más 👀</Button>
                        </Link>

                        <Button variant="dark" onClick={() => agregarPizza(pizza)}>
                          Añadir 🛒
                        </Button>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
     
    </>
  );
}

export default Pizzas;
