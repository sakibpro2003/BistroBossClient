import { useLoaderData } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import axios from "axios";

const UpdateItem = () => {
  const item = useLoaderData();
  // console.log(item, item._id);
  // console.log(JSON.stringify(data))
  // useMenu();
  const handleUpdate = (e) => {

    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const updateObj = {
      name: name,
      price: price,
      category: category,
    };
    const update = async (data) => {
      axios.patch(`http://localhost:5000/menu/${item._id}`, updateObj).then((response) => {
        console.log(response);
      });

      return data;
    };
    update();
  };
  return (
    <div>
      <h2 className="text-3xl">update item</h2>

      <form onSubmit={handleUpdate}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            defaultValue={item.name}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <input
            type="text"
            name="category"
            defaultValue={item.category}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input
            type="text"
            name="price"
            defaultValue={item.price}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recipe </span>
          </div>
          <input
            type="text"
            name="recipe"
            defaultValue={item.recipe}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <input className="btn" type="submit" />
      </form>
    </div>
  );
};

export default UpdateItem;
