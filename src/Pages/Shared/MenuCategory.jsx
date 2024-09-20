import MenuItem from "./MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
       
        <div className="grid grid-cols-2">
            {
                items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
            }
            {/* {<Cover ></Cover>} */}
        </div>
    );
};

export default MenuCategory;