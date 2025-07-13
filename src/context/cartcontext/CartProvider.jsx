import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  const productExistsInCart = (id) => {
    return cart.some((p) => p.id === id);
  };

  const cartLength = () => {
    return cart.reduce((acc, curr) => acc + curr.count, 0);
  };

  const addToCart = (productToAdd) => {
    const existingProductIndex = cart.findIndex(
      (p) => p.id === productToAdd.id
    );

    if (existingProductIndex > -1) {
      const updatedCart = cart.map((p, index) => {
        if (index === existingProductIndex && p.count < p.stock) {
          return { ...p, count: p.count + 1 };
        }
        return p;
      });
      setCart(updatedCart);
    } else {
      setCart((curr) => [...curr, { ...productToAdd, count: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const existingProductIndex = cart.findIndex(
      (p) => p.id === productToRemove.id
    );

    if (existingProductIndex > -1) {
      const updatedCart = cart.map((p, index) => {
        if (index === existingProductIndex && p.count > 0) {
          return { ...p, count: p.count - 1 };
        }
        return p;
      });
      setCart(updatedCart.filter((p) => p.count > 0));
    }
  };

  const itemCount = (id) => {
    const targetItem = cart.find((item) => item.id === id);
    return targetItem ? targetItem.count : 0;
  };

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDecrease = (product) => {
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
        itemCount,
        // clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
