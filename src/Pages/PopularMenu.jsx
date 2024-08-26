import { useEffect, useState } from "react";
import MenuItem from "./Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)

            const popularMenu = data.filter(item=> item.category ==='popular');
            setMenu(popularMenu);
            // console.log(menu)
            // setData(data1)
            // console.log(data1)
        })
        // .then(err=>{
        //     console.log(err)
        // })
    }, [menu])
    return (
        <div className="grid grid-cols-2">
            {
                menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

export default PopularMenu;