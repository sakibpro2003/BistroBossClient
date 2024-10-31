import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const location = useLocation();
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const getLink = (path)=>{
    return location.pathname === path ? "text-yellow-400" : ' ';
  }
  return (
    <div className="navbar absolute max-w-screen-xl mx-auto z-10 text-white bg-black bg-opacity-20">
      <div className="flex-1">
        <div className="uppercase">
          <h3 className="text-2xl font-bold">Bistro Boss</h3>
          <h5 className="font-bold">R e s t a u r a n t</h5>
        </div>

        {/* <Link to={"/dashboard/admin-home"} className="">
          Admin Dashboard
        </Link>

        <Link to={"/dashboard/user-home"} className="">
          User Dashboard
        </Link> */}
      </div>
        <div className='flex gap-3 font-bold '>
            <Link to={'/'} className={getLink('/')}>Home</Link>
            <Link to={'/contactus'} className={getLink('/contactus')}>Contact Us</Link>
            <Link to={'/'}>Dashboard</Link>
            <Link to={'/ourmenu'} className={getLink('/ourmenu')}>Our Menu</Link>
            <Link to={'/order'} className={getLink('/order')}>Our Shop</Link>
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
            </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          {/* <div></div> */}
          
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          ></div>
        </div>
        
      </div>

      {user ? (
        <>
          {" "}
          <Link onClick={() => logOut()} className="btn">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="font-bold" to="/login">
            Login
          </Link>
        </>
      )}
      <div className="w-10 rounded-md">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
  );
};

export default Navbar;
