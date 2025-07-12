import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Cart, Layout, ProductDetails, Products } from "./pages/pages";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
