import React from "react";
import { useCart } from "../../context/cartcontext/useCart";
import CartProduct from "../cartproduct/CartProduct";
import RequireAuth from "../requireauth/RequireAuth";

function Cart() {
  const { cart } = useCart();
  return (
    <RequireAuth>
      <ul className="flex flex-wrap justify-center gap-2 mt-2">
        {cart &&
          cart?.map((p) => {
            return <CartProduct key={p.id} {...p} product={p} />;
          })}
      </ul>
    </RequireAuth>
  );
}

export default Cart;
