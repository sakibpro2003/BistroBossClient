import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../assets/Components/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ACCESS_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="">
      <SectionTitle
        subTitle={"What Our Client Say"}
        sectionTitle={"TESTIMONIAL"}
      ></SectionTitle>
      <div className="rating text-center flex justify-center">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <h1 className="text-center text-9xl">"</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24">
              <p>{review.details}</p>
              <h2 className="text-3xl text-orange-600">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
