import React from "react";
import useMenu from "../../hooks/useMenu";
import SectionHeader from "../../assets/Components/SectionHeader";
import SectionTitle from "../../assets/Components/SectionTitle";
// import SectionTitle from "./SectionTitle";

const CheffRecommends = () => {
  const [menuItems, isLoading] = useMenu();

  console.log(menuItems);
  return (
    <div className="text-center">
        <SectionTitle subTitle={"Should Try"} sectionTitle={"Cheffs Recommends"}></SectionTitle>
        <div className="flex justify-around">
      {menuItems.slice(0, 3).map((item) => (
        <div
          key={item._id}
          className="card rounded-none card-compact bg-base-200 w-96"
        >
          <figure>
            <img
              src="https://i.ibb.co.com/mRd4d79/front-view-greek-salad-lettuce-with-black-olives.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mx-auto">Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CheffRecommends;
