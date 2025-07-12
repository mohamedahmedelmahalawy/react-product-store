import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productExistsInCart = (id) => {
    return cart.find((p) => p.id === id);
  };
  const cartLength = () => {
    return cart.reduce((acc, curr) => acc + curr.count, 0);
  };

  const addToCart = (product) => {
    const productIndex = cart.findIndex((p) => p.id === product.id);
    if (productExistsInCart(product.id)) {
      const updatedCart = cart.map((p, index) => {
        if (index === productIndex) {
          return { ...p, count: p.count + 1 };
        } else {
          return p;
        }
      });
      setCart(updatedCart);
    } else {
      setCart((curr) => [...curr, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const productIndex = cart.findIndex((p) => p.id === product.id);
    if (productExistsInCart(product.id)) {
      const updatedCart = cart.map((p, index) => {
        if (index === productIndex && p.count > 1) {
          return { ...p, count: p.count - 1 };
        } else {
          return p;
        }
      });
      setCart(updatedCart);
    }
  };

  const handleIncrease = (e, stock, product, count, setCount) => {
    e.stopPropagation();
    count < stock && setCount((curr) => curr + 1);
    addToCart(product);
  };
  const handleDecrease = (e, product, count, setCount) => {
    e.stopPropagation();
    count > 0 && setCount((curr) => curr - 1);
    removeFromCart(product);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        productExistsInCart,
        addToCart,
        removeFromCart,
        cartLength,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
