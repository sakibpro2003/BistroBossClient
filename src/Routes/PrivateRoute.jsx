import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(user){
        return children;
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;