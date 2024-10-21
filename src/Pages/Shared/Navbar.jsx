import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
// import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  // console.log("user 2",user)
  return (
    <div className="navbar absolute max-w-screen-xl mx-auto z-10 text-white bg-black bg-opacity-20">
      <div className="flex-1">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <div className="uppercase">
          <h3 className="text-2xl font-bold">Bistro Boss</h3>
          <h5 className="font-bold">R e s t a u r a n t</h5>
        </div>

        <Link to={"/dashboard/admin-home"} className="btn mr-4">
          Admin Dashboard
        </Link>

        <Link to={"/dashboard/user-home"} className="btn">
          User Dashboard
        </Link>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div></div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              {/* <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
            <button>
              <Link to={"dashboard/cart"}>Cart</Link>
            </button>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/order"}>Order</Link>
            </li>
            <li>
              <Link to={"/login"}>login</Link>
            </li>
            <li>
              <Link to={"/register"}>register</Link>
            </li>
            <li>
              <Link to={"/secret"}>sec</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
      {user ? (
        <>
          {" "}
          <button onClick={() => logOut()} className="btn">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="btn" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
