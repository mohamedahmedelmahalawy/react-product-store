import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Error,
  Layout,
  Login,
  ProductDetails,
  Products,
  Register,
} from "./pages/pages";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: Error,
    // loader: loadRootData,
    children: [
      {
        index: true,
        Component: Products,
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
