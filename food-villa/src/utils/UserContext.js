import { createContext } from "react";


const UserContext = createContext({
  name: "Dummy Name",
  email: "dummy@gmail.com",
});

// React dev tools does not track this UserContext name
// we can provide a name so that we can identify the context in dev tools
// it does not add any functionality, it just helps debugging

UserContext.displayName = "UserContext";

export default UserContext;
