import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle';
import MenuCategory from '../Shared/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item=> item.category ==='dessert');
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
            <Cover title={'Dessert'}></Cover>
            <MenuCategory items={desserts} ></MenuCategory>
            <Cover title={'Pizza'}></Cover>
            <MenuCategory items={pizza} ></MenuCategory>
            <Cover title={'salad'}></Cover>
            <MenuCategory items={salad} ></MenuCategory>
            <Cover title={'Soup'}></Cover>
            <MenuCategory items={soup} ></MenuCategory>
        
            
        </div>
    );
};

export default Menu;