import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pizza from "../components/Pizza";


function pizzaDetail() {
    return(
        <>
       <div className="app">
              <Navbar />
              <div className="contenido">
                    <Pizza />
              </div>
                <Footer />
       </div>
     
   
   
        </>
    )
}

export default pizzaDetail;

