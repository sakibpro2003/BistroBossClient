
const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    // console.log(_id)
    return (
        <div className="flex">
            <img  style={{borderRadius:'0px 200px 200px 200px'}} className="w-24 " src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>

            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;