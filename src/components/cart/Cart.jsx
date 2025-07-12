import React from "react";
import { useCart } from "../../context/useCart";
import CartProduct from "../cartproduct/CartProduct";

function Cart() {
  const { cart } = useCart();
  return (
    <>
      {cart &&
        cart?.map((p) => {
          return <CartProduct key={p.id} {...p} product={p} />;
        })}
    </>
  );
}

export default Cart;
