import Banner from "../assets/Components/Banner";
import Category from "../assets/Components/Category";
import OurCheff from "../assets/Components/OurCheff";
import Featured from "../Section/Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Shared/MenuItem/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <OurCheff></OurCheff>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;