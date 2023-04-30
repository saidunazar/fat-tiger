import React from "react";
import ReactDOM from "react-dom/client";

//Components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
