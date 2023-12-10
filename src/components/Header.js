import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RiWifiOffLine } from "react-icons/ri";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { HiOutlineStatusOnline } from "react-icons/hi";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div id="header">
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
        <h1>
          <Link to={"/"}>SurjithDev</Link>
        </h1>
      </div>
      <div>
        <ul>
          <li title={"You Are " + (onlineStatus ? "Online" : "Offline")}>
            {!onlineStatus ? (
              <RiWifiOffLine style={{ color: "red", fontSize: "30px" }} />
            ) : (
              <HiOutlineStatusOnline
                style={{ color: "green", fontSize: "35px" }}
              />
            )}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/cart"}></Link>Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
