import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import PopularMenu from "../PopularMenu";
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle';
import MenuCategory from '../Shared/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category ==='dessert');
    const pizza = menu.filter(item=> item.category ==='pizza');
    const soup = menu.filter(item=> item.category ==='soup');
    const salad = menu.filter(item=> item.category ==='salad');
    const offered = menu.filter(item=> item.category ==='offered');

    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover></Cover>
            <SectionTitle title={'Todays Offer'} subTitle={'---Dont Miss---'}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
        
            
        </div>
    );
};

export default Menu;