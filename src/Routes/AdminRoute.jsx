import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
// import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const AdminRoute = ({children}) => {
    const {user} = useAuth();
    const {loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div>loading...........</div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to={"/login"} state={{from: location}}></Navigate>;
};

export default AdminRoute;