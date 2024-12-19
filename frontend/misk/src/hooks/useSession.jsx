import { useAuth } from "../middleware/protectRoutes";
import {jwtDecode as jwt} from "jwt-decode";
import useNavigate from "react-router-dom";
import { useEffect } from "react";

const useSession = () => {
    const session = useAuth()
    const decodeSession = session ? jwt(session) : null

    const navigate = useNavigate()

    useEffect(() => {
        if(!session) {
            navigate('/')
        }
    }, [navigate, session]);

    return decodeSession

}
 export default useSession