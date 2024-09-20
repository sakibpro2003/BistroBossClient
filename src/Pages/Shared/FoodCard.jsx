
const FoodCard = ({item}) => {
  const handleAddToCart=(food)=>{
    console.log(food)
  }
    // console.log(item)
    const {name,price,category,image,recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className="font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
