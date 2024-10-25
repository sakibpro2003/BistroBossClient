import Banner from "../assets/Components/Banner";
import Category from "../assets/Components/Category";
import OurCheff from "../assets/Components/OurCheff";
import Featured from "../Section/Featured";
import PopularMenu from '../PopularMenu/PopularMenu'
import Testimonials from "./Shared/MenuItem/Testimonials";
import CallUs from "./Shared/CallUs";
import CheffRecommends from "./Shared/CheffRecommends";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <OurCheff></OurCheff>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <CheffRecommends></CheffRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;