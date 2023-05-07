import { createContext } from "react";

//Default Values for UserContext
const UserContext = createContext({
  userDetails: {
    name: "John Doe",
    email: "johndoe@test.test",
  },
});

export default UserContext;
