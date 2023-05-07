import { useContext, useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Outlet } from "react-router";
import UserContext from "./utils/UserContext";

const App = () => {
  const [cartItems, setCartItem] = useState([]);
  const user = useContext(UserContext);

  return (
    <UserContext.Provider
      value={{ ...user, cartItems: cartItems, setCartItem: setCartItem }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

export default App;
