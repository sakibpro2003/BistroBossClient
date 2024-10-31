import OurMenuBanner from "../assets/Components/OurMenuBanner";
import banner3 from '../../src/assets/menu/banner3.jpg';
import useMenu from "../hooks/useMenu";
import ShortMenu from "../assets/Components/ShortMenu";


const OurMenu = () => {
    const dessertBg = 'https://i.ibb.co.com/wNFxCZG/pexels-igor-ovsyannykov-56123-205961.jpg';
    const pizzaBg = 'https://i.ibb.co.com/XpxfJ3t/pexels-narda-yescas-724842-1566837.jpg';
    const saladBg = 'https://i.ibb.co.com/PrLKVpY/pexels-jerchung-2116090.jpg';
    const soupBg = 'https://i.ibb.co.com/Lz217NW/pexels-navada-ra-628779-1703272.jpg';
    const [menu] = useMenu();
    console.log(menu)
    return (
        <div>
            <OurMenuBanner bgImage={banner3}  title="OUR MENU" sub_title="WOULD YOU LIKE TO TRY OUR DISH?"/>
            {/* TODO: modify short menu after uploading new menu images */}
            <ShortMenu></ShortMenu>
            <OurMenuBanner bgImage={dessertBg} title={'DESSERTS'} sub_title={" TRysidfis sd fjklsdj fsk dfk sdfj skdjf"}></OurMenuBanner>
            <ShortMenu></ShortMenu>
            <OurMenuBanner bgImage={pizzaBg} title={'PIZZA'} sub_title={" TRysidfis sd fjklsdj fsk dfk sdfj skdjf"}></OurMenuBanner>
            <ShortMenu></ShortMenu>
            <OurMenuBanner bgImage={saladBg} title={'SALAD'} sub_title={" TRysidfis sddsklfj skdjf fjklsdj fsk dfk sdfj skdjf"}></OurMenuBanner>
            <ShortMenu></ShortMenu>
            <OurMenuBanner bgImage={soupBg} title={'SOUP'} sub_title={" TRysi s sddsklfj skdjf fjklsdj fsk dfk sdfj skdjf"}></OurMenuBanner>
            <ShortMenu></ShortMenu>
        </div>
    );
};

export default OurMenu;