import axios from "axios";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../hooks/useAxiosSecure";
const FoodCard = ({ item }) => {
  const { name, price, category, image, recipe, _id } = item;
  const { user } = useAuth();
  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        image,
        price,
        name
      };
      axiosSecure.post("/cart", cartItem).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className="font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
