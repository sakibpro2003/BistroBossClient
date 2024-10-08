import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>loading...........</div>
    }

    if(user){
        return children;
    }
    return <Navigate to={"/login"} state={{from: location}}></Navigate>;
    
};

export default PrivateRoute;