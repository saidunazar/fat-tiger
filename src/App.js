//Components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Outlet } from "react-router";

Outlet;
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
