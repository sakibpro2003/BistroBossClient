import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUser,
  FaUtensilSpoon,
} from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  //for admin turn this on-----------------------------
  // const [isAdmin] = useAdmin();
  //for normal user turn this on----------------------------
  const isAdmin = false;
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"userHome"}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"additem"}>
                  <FaUtensilSpoon /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"manageitems"}>
                  <FaAd /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"bookings"}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink to={"users"}>
                  <FaUser /> All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"cart"}>
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"userHome"}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"reservation"}>
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"paymentHistory"}>
                  <FaList /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"review"}>
                  <FaAd /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"bookings"}>
                  <FaAd /> Add a Bookings
                </NavLink>
              </li>
            </>
          )}

          {/* normal user sidebaer */}
          <div className="divider"></div>

          <li>
            <NavLink to={"home"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"home"}>
              <FaList /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"home"}>
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
