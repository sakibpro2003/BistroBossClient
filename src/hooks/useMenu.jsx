import useAxiosPublic from "./useAxiosPublic";
import {
    useQuery,
  } from '@tanstack/react-query';

const useMenu = () =>{
    const axiosPublic = useAxiosPublic();
    const {data: menu = [],isPending: loading,refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async ()=>{
            const res = await axiosPublic.get("/menu");
            // console.log(res.data)
            return res.data
        }
        
    })
    return [menu,loading,refetch]
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_ACCESS_URL}/menu`)
    //         .then(res=>res.json())
    //         .then(data=>{
    //         // const popularMenu = data.filter(item=> item.category ==='popular');
    //         setMenu(data);
    //         setLoading(false);
           
    //     })
        
    // }, [])
    // return [menu,loading]
}

export default useMenu;