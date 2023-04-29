import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h4>Welcome to Fat Tiger!🐯</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
