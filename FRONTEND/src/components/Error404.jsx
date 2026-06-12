import { Link } from "react-router-dom";


function Error404() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <h1>404</h1>

        <h2>¡Oops! Página no encontrada</h2>

        <p>
          La página que estás buscando no existe o fue movida.
          Vuelve al inicio para seguir disfrutando nuestras pizzas.
        </p>

        <div className="pizza-icon">🍕</div>

        <Link to="/" className="btn btn-dark not-found-btn">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Error404;