import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function HomeLogin (){
    const {user, logOut} = useUserAuth();
    console.log(user)
   async function handleLogOut(){
        try{
         await logOut();
        }
         catch(err){
            console.log(err.message);
         }
    }
    return(
        <>
        <div className="p-4 box mt-3 text-center">Hello welcome<br/> {user && user.email} </div>
        <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleLogOut}>Log out</Button>
        </div>
        </>
    )
}

export default HomeLogin;