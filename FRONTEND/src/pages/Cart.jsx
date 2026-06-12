import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carrito from "../components/Carrito";

function Cart(){

return(
      <>
       <div className="app">
              <Navbar />
              <div className="contenido">
               <Carrito />
              </div>
                <Footer />
       </div>
      </>
)

}

export default Cart