import { createContext } from "react";

const UserContext = createContext({
  user: {},
  friends: [],
});

export default UserContext;
