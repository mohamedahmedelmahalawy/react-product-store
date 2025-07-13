import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./context/cartcontext/CartProvider.jsx";
import UsersProvider from "./context/userscontext/UsersProvider.jsx";
import { SearchProvider } from "./context/searchontext/SearchProvider.jsx";

createRoot(document.getElementById("root")).render(
  <UsersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UsersProvider>
);
