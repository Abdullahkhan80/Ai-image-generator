import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const [user, setuser] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
 const backendUrl= import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/";
 const [credit, setcredit] = useState(false)
 const [token, settoken] = useState(localStorage.getItem("Authorization") );
  const value = {
    backendUrl,
    credit, setcredit,
    user, setuser,
    showLogin, setshowLogin
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;