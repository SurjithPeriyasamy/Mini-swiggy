import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RiWifiOffLine } from "react-icons/ri";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { HiOutlineStatusOnline } from "react-icons/hi";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="shadow-lg">
      <div className="flex w-3/4 m-auto justify-between pt-5 py-2 items-center">
        <Link to={"/"} className="flex items-center group">
          <img
            className="h-20 group-hover:rotate-180 duration-500"
            src={logo}
            alt="logo"
          />
          <h1 className="text-pink-500 duration-500 font-semibold text-xl ">
            FOODGEAR
          </h1>
        </Link>
        <div>
          <ul className="flex items-center gap-9 text-lg font-medium">
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
            <li className="hover:text-pink-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-pink-500">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="hover:text-pink-500">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="hover:text-pink-500">
              <Link to={"/cart"}></Link>Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
