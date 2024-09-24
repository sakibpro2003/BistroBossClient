import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-full bg-orange-400'>
                <ul className='menu'>
                    <li><NavLink to={'dashboard/cart'}> <FaShoppingCart /> My Cart</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;