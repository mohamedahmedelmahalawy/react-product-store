import { LuStore } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

import { useCart } from "../../context/cartcontext/useCart";
import { useUsers } from "../../context/userscontext/useUsers";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { cartLength } = useCart();
  const { userAuthenticated, userAuthenticatedValue, handleLogout } =
    useUsers();

  // Get wishlist count from Redux
  const wishlistCount = useSelector(
    (state) => state.wishlist.wishlistItems.length
  );

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 w-full text-white">
      <NavLink to="/" className="text-2xl">
        <LuStore />
      </NavLink>

      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold"
                : "hover:text-yellow-400 transition-colors"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold"
                : "hover:text-yellow-400 transition-colors"
            }
          >
            Wishlist
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {/* Wishlist Icon with Count */}
        <NavLink
          to="/wishlist"
          className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
        >
          <FaHeart />
          <span className="bg-red-500 px-2 py-1 rounded-full font-bold text-white text-xs">
            {wishlistCount}
          </span>
        </NavLink>

        {/* Cart Icon with Count */}
        <NavLink
          to="/cart"
          className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
        >
          <TiShoppingCart />
          <span className="bg-red-500 px-2 py-1 rounded-full font-bold text-white text-xs">
            {cartLength()}
          </span>
        </NavLink>

        {/* User Authentication Section */}
        {userAuthenticated &&
        userAuthenticatedValue &&
        Object.keys(userAuthenticatedValue).length > 0 ? (
          <div className="flex items-center gap-2">
            <h3 className="text-yellow-400">
              Welcome, {userAuthenticatedValue.name}
            </h3>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <NavLink
              to="/login"
              className="hover:text-yellow-400 transition-colors"
            >
              Login
            </NavLink>
            <span>/</span>
            <NavLink
              to="/register"
              className="hover:text-yellow-400 transition-colors"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
