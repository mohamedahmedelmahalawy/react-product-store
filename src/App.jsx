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
  Wishlist,
} from "./pages/pages";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // errorElement: <Error />,
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
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
