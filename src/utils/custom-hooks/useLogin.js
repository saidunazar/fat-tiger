import { useState } from "react";

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (!isLoggedIn) {
      localStorage.setItem("loginStatus", true);
      setIsLoggedIn(true);
    } else {
      localStorage.clear();
      setIsLoggedIn(false);
    }
  };

  return [isLoggedIn, handleLogin];
};

export default useLogin;
