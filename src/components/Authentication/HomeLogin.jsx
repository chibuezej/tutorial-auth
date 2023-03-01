import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function HomeLogin (){
    const {user} = useUserAuth();
    console.log(user)
    return(
        <>
        <div className="p-4 box mt-3 text-center">Hello welcome</div>
        <div className="d-grid gap-2">
            <Button variant="primary">Log out</Button>
        </div>
        </>
    )
}

export default HomeLogin;