import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const navigate = useNavigate()

    if(loading){
        return <div>loading...........</div>
    }

    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>;
    
};

export default PrivateRoute;