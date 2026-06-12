import napolitana from "../assets/pizzaNAP.jpeg"
import española from "../assets/piizaESP.jpeg"
import peperoni from "../assets/pizzaPEP.jpeg"

import Button from 'react-bootstrap/Button';

function CardPizza() {
  const productos = [
    {
      imagen: napolitana,
      tipo: "Pizza Napolitana",
      ingredientes: "mozarella, tomates, jamón, orégano",
      precio: 5950,
    },
    {
      imagen: española,
      tipo: "Pizza Española",
      ingredientes: "mozarella, gorgonzola, parmesano, provolone",
      precio: 5950,
    },
    {
      imagen: peperoni,
      tipo: "Pizza Pepperoni",
      ingredientes: "mozarella, pepperoni, orégano",
      precio: 5950,
    }
  ]

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4 d-flex" key={producto.tipo}>
              <div className="card card-pizza w-100 h-100">
                <img 
                  src={producto.imagen} 
                  className="card-img-top imagen-pizza" 
                  alt={producto.tipo} 
                />

                <div className="card-body">
                  <div className="informacion">
                    <h2>{producto.tipo}</h2>

                    <h5 className="card-title fw-light mb-3 text-center">
                      Ingredientes:
                    </h5>

                    <p className="ingredientes fs-6 text-center">
                      🍕 {producto.ingredientes}
                    </p>

                    <hr />
                  </div>

                  <div className="cont-precio-botones">
                    <div className="precio-pizza text-center fs-3">
                      Precio: ${producto.precio.toLocaleString("es-CL")}
                    </div>

                    <div className="botones-card">
                      <Button variant="dark">Ver Más 👀</Button>
                      <Button variant="dark">Añadir 🛒</Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardPizza