import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import PopularMenu from "../PopularMenu";
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover></Cover>
            <PopularMenu></PopularMenu>
            <Cover></Cover>
            <PopularMenu></PopularMenu>
            <Cover></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;