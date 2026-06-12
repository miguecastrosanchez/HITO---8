import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pizzas from "../components/Pizzas";

function Home() {
 

  return (
    
     <>
       <div className="app">
              <Navbar />
              <Header />
              <div className="contenido">
                <Pizzas />
              </div>
                <Footer />
       </div>
     
   
   
        </>
    
  );
}

export default Home;
