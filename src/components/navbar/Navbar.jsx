import { LuStore } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

import { useCart } from "../../context/cartcontext/useCart";
import { useUsers } from "../../context/userscontext/useUsers";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { cartLength } = useCart();
  const { userAuthenticated, userAuthenticatedValue, handleLogout } =
    useUsers();

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 w-full text-white">
      <LuStore />

      <ul className="flex gap-4">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>{/* <NavLink>Search</NavLink> */}</li>
        <input type="text" className="bg-[#030712ac]" />
        <NavLink to="/search">search</NavLink>
      </ul>

      <div className="flex items-center gap-4">
        <NavLink to="/cart" className="flex items-center gap-2">
          <TiShoppingCart />
          <span className="bg-red-500 px-2 py-1 rounded-full font-bold text-white text-xs">
            {cartLength()}
          </span>
        </NavLink>
        {userAuthenticated && Object.keys(userAuthenticatedValue).length > 0 ? (
          <div className="flex items-center gap-2">
            <h3>{userAuthenticatedValue.name}</h3>
            <NavLink to="/login" onClick={handleLogout}>
              logout
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>/
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
