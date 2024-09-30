import {
    useQuery,
  } from '@tanstack/react-query'
  import useAxiosSecure from "../hooks/useAxiosSecure"
import useAuth from './useAuth';
const useAdmin = () => {
    const {user} = useAuth();
    // console.log(user?.email)
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin,isPending: isAdminLoading}  = useQuery({
        queryKey:[user?.email,"isAdmin"],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            // console.log(res.data?.admin);

            // temporaryly all user are set admin!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            return user?.email;
        }
    })
    return [isAdmin,isAdminLoading];
    
};

export default useAdmin;