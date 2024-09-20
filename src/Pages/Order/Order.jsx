import orderCoverImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover";
import FoodCard from "../Shared/FoodCard";
import OrderTab from "../Shared/OrderTab";
const Order = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item=> item.category ==='dessert');
    const pizza = menu.filter(item=> item.category ==='pizza');
    const soup = menu.filter(item=> item.category ==='soup');
    const salad = menu.filter(item=> item.category ==='salad');
    const offered = menu.filter(item=> item.category ==='offered');
    const drinks = menu.filter(item=> item.category ==='drinks');
  return (
    <div>
      <Cover coverImg={orderCoverImg} title={"Order Food"}></Cover>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="SALAD"
        />
        <div role="tabpanel" className="tab-content p-10">
         <OrderTab item={salad}></OrderTab>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="PIZZA"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
        <OrderTab item={pizza}></OrderTab>

        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="SOUPS"
        />
        <div role="tabpanel" className="tab-content p-10">
        <OrderTab item={soup}></OrderTab>

        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="DESSERTS"
        />
        <div role="tabpanel" className="tab-content p-10">
        <OrderTab item={desserts}></OrderTab>

        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="DRINKS"
        />
        <div role="tabpanel" className="tab-content p-10">
        <OrderTab item={drinks}></OrderTab>

        </div>
      </div>
    </div>
  );
};

export default Order;
