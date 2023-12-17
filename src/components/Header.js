import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RiWifiOffLine } from "react-icons/ri";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { useSelector } from "react-redux";
import { PiHamburgerFill } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import cart from "../images/cart.png";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItemLength = useSelector((store) => store.cart.totalItemsCount);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="shadow-lg md:fixed md:top-0 md:w-full md:z-30 bg-white">
      <div className="flex md:w-3/4 w-[90%] m-auto justify-between pt-5 py-2 items-center">
        <Link
          onClick={handleCloseMenu}
          to={"/"}
          className="flex items-center group scale-75 md:scale-100 italic"
        >
          <img
            className="h-[72px] group-hover:rotate-180 duration-500"
            src={logo}
            alt="logo"
          />
          <h1 className="text-pink-600 duration-500 font-semibold text-xl ">
            FOODGEAR
          </h1>
        </Link>
        <div>
          <button
            onClick={handleMenu}
            className={
              "lg:hidden text-3xl text-pink-700 hover:mt-1 duration-300 " +
              (showMenu ? "rotate-90" : "rotate-0")
            }
          >
            {showMenu ? <CgClose /> : <PiHamburgerFill />}
          </button>
          <ul
            className={
              "absolute text-center lg:static bg-white left-0 top-[100px] lg:top-0 w-full lg:w-fit z-30 duration-300 flex flex-col py-14 lg:py-0 lg:flex-row origin-top  items-center gap-10 lg:gap-10 text-lg font-medium " +
              (showMenu ? "scale-y-100" : "scale-y-0 lg:scale-100")
            }
          >
            <li
              className={
                " text-4xl mt-1 " + (!onlineStatus ? "animate-ping" : "")
              }
              title={"You Are " + (onlineStatus ? "Online" : "Offline")}
            >
              {!onlineStatus ? (
                <RiWifiOffLine className="text-red-700 text-3xl" />
              ) : (
                <HiOutlineStatusOnline className="text-green-700 hover:animate-pulse" />
              )}
            </li>
            <li
              onClick={handleCloseMenu}
              className="hover:bg-gray-400 hover:scale-125 duration-200 lg:hover:bg-inherit w-full lg:w-fit py-5  lg:hover:text-pink-500"
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onClick={handleCloseMenu}
              className="lg:hover:text-pink-500 hover:scale-125 duration-200 lg:hover:bg-inherit w-full lg:w-fit py-5 hover:bg-gray-400"
            >
              <Link to={"/about"}>About Us</Link>
            </li>
            <li
              onClick={handleCloseMenu}
              className="lg:hover:text-pink-500 hover:scale-125 duration-200 lg:hover:bg-inherit w-full lg:w-fit py-5 hover:bg-gray-400"
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li onClick={handleCloseMenu}>
              <Link
                to={"/cart"}
                className="hover:bg-gray-400 lg:hover:bg-inherit w-full lg:w-fit flex gap-1 relative"
              >
                <img className="h-10" src={cart} alt="cart" />
                <span className="rounded-full bg-green-600 text-sm text-white absolute h-6 w-6 text-center pt-[2px] -top-3 -left-4">
                  {cartItemLength}
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
