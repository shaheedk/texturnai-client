import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ImagesIcon, Library } from "lucide-react";

const NavBar = () => {
  const { user,setShowLogin,logout,credit } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex item-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-30 sm:w-32 lg:w40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            
            <button onClick={() => navigate("/buy")} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.4 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_star} alt="" />
              <p  className="text-xs sm:text-sm font-medium text-gray-800" >
                Credit left :{credit}
              </p>
            </button>
            <NavLink to='/library'className='flex ' > <ImagesIcon size={20} className="text-gray-300"/> Library </NavLink>

            <p className="text-gray-200 max-sm:hidden pl-4">hi ,{user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow"
              />

              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2  bg-white rounded-md border-none text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10  " onClick={logout}>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              {" "}
              Pricing
            </p>
            <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full" onClick={()=>setShowLogin(true)} >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
