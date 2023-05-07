import { useContext, useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import store from "./utils/store/store";
import { Provider } from "react-redux";

const App = () => {
  const [cartItems, setCartItem] = useState([]);
  // const user = useContext(UserContext);

  return (
    <Provider store={store}>
      {/* <UserContext.Provider
        value={{ ...user, cartItems: cartItems, setCartItem: setCartItem }}
      > */}
      <Header />
      <Outlet />
      <Footer />
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

export default App;
