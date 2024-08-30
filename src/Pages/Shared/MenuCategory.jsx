import MenuItem from "./MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
       
        <div className="grid grid-cols-2">
            {/* <p>popular menu</p> */}
            {
               items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

export default MenuCategory;