import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {

  const isAdmin = true;
    const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
         {
            isAdmin ? <>
             <li>
            <NavLink to={"dashboard/cart"}>
              <FaShoppingCart /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/userHome"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/reservation"}>
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/review"}>
              <FaAd /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/bookings"}>
              <FaAd /> Add a Bookings
            </NavLink>
          </li>
            </>:<>
             <li>
            <NavLink to={"dashboard/cart"}>
              <FaShoppingCart /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/userHome"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/reservation"}>
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/review"}>
              <FaAd /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/bookings"}>
              <FaAd /> Add a Bookings
            </NavLink>
          </li>
            </>
         }


          {/* normal user sidebaer */}
          <div className="divider"></div>

          <li>
            <NavLink to={"dashboard/home"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/home"}>
              <FaList /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashboard/home"}>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
