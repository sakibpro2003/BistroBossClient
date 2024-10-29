import OurMenuBanner from "../assets/Components/OurMenuBanner";
import banner3 from '../../src/assets/menu/banner3.jpg';

const OurMenu = () => {
    return (
        <div>
            <OurMenuBanner bgImage={banner3}  title="OUR MENU" sub_title="WOULD YOU LIKE TO TRY OUR DISH?"/>
        </div>
    );
};

export default OurMenu;