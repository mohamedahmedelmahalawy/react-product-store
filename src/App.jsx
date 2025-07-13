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
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
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
