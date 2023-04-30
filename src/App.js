import { useState } from "react";

//Components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Main from "./components/Main";

const App = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Header setSearchText={setSearchText} />
      <Main searchText={searchText} />
      <Footer />
    </>
  );
};

export default App;
