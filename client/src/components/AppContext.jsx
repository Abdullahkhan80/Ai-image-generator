import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const [user, setuser] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
 const backendUrl= import.meta.env.VITE_BACKEND_URL;
 const [credit, setcredit] = useState(0)
 const [token, setToken] = useState(localStorage.getItem("token") );

const loadCredit=async ()=> {
  try {
    const url = backendUrl.endsWith('/') ? backendUrl : backendUrl + '/';
    const res = await axios.get(url + 'api/user/credits', { headers: { Authorization: "Bearer " + token } });
    if (res.data.success) {
      setcredit(res.data.credits);
      setuser(res.data.user);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || error.message);
  }
}

const logout =()=> {
  localStorage.removeItem('token')
  setToken(null);
  setuser(null);
  setcredit(0);
}

useEffect(() => {
  if (token) {
    loadCredit();
  } 
}, [token])

 
  const value = {
    backendUrl,
    credit, setcredit,
    user, setuser,
    showLogin, setshowLogin,
    token, setToken,
    loadCredit, logout

  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;