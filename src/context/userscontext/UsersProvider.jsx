import { useEffect, useState } from "react";
import UsersContext from "./UsersContext";
// import { useCart } from "../cartcontext/useCart";

const initialUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const UsersProvider = ({ children }) => {
  // const { clearCart } = useCart();
  const [users, setUsers] = useState(initialUsers);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userAuthenticatedValue, setUserAuthenticatedValue] =
    useState(initialUser);

  const addUser = (user) => {
    setUsers((currentUsers) => [...currentUsers, user]);
  };
  const handleLogout = () => {
    console.log("Logging out...");
    setUserAuthenticated(false);
    setUserAuthenticatedValue({});

    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(userAuthenticatedValue));
    if (userAuthenticatedValue) {
      setUserAuthenticated(true);
    }
    console.log(JSON.stringify(users));
  }, [users, userAuthenticatedValue]);

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        userAuthenticated,
        setUserAuthenticated,
        userAuthenticatedValue,
        setUserAuthenticatedValue,
        handleLogout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
