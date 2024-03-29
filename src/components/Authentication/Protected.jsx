import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Protected ({children}){
  let {user} = useUserAuth();
   if(!user){
    return <Navigate to="/" />
   }
    return children 
   
}

export default Protected;