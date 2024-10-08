import FoodCard from "./FoodCard";

const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
          item.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
        }
        </div>
    );
};

export default OrderTab;