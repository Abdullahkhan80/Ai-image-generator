import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
const generateImage = async (prompt) => {
  try {
    const url = backendUrl.endsWith('/') ? backendUrl : backendUrl + '/';
    const response = await axios.post(url+'api/image/generate-image', { prompt }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.data.success) {
      await loadCredit(); // Reload credits after image generation
      toast.success("Image generated successfully!");
      console.log(response);
      return response.data.resultImage; // Assuming the API returns the image URL
    } else {
      toast.error(response.data.message || "Image generation failed");
      await loadCredit();
      if(data.credit ===0){
        toast.error("You have no credits left. Please buy more credits to generate images.");
      }
      return null;
    }
    
  } catch (error) {
    console.error("Error generating image:", error);
    toast.error("Failed to generate image. Please try again.");
    
  }

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
    loadCredit, logout,
    generateImage

  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;