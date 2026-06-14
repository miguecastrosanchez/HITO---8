import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarPizza = (pizza) => {
    const pizzaExiste = carrito.find((p) => p.id === pizza.id);

    if (pizzaExiste) {
      const carritoActualizado = carrito.map((p) =>
        p.id === pizza.id
          ? { ...p, count: p.count + 1 }
          : p
      );

      setCarrito(carritoActualizado);
    } else {
      const nuevaPizza = {
        ...pizza,
        count: 1,
      };

      setCarrito([...carrito, nuevaPizza]);
    }
  };

  const quitarPizza = (id) => {
    const carritoActualizado = carrito
      .map((p) =>
        p.id === id
          ? { ...p, count: p.count - 1 }
          : p
      )
      .filter((p) => p.count > 0);

    setCarrito(carritoActualizado);
  };

  const total = carrito.reduce(
    (acumulador, pizza) => acumulador + pizza.price * pizza.count,
    0
  );

  const limpiarCarrito = () => {
  setCarrito([]);
};

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarPizza,
        quitarPizza,
        total,
        limpiarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;