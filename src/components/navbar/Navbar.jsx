import React from "react";
import { LuStore } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/useCart";

function Navbar() {
  const { cartLength } = useCart();
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 w-full text-white">
      <LuStore />

      <ul className="flex gap-4">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Search</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <NavLink to="/cart" className="flex items-center gap-2">
          <TiShoppingCart />
          <span className="bg-red-500 px-2 py-1 rounded-full font-bold text-white text-xs">
            {cartLength()}
          </span>
        </NavLink>
        <div>Login</div>
      </div>
    </nav>
  );
}

export default Navbar;
