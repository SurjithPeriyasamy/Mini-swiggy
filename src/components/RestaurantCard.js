import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IMAGE_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, areaName, cloudinaryImageId, avgRating, sla } =
    resData.info;
  return (
    <div className="card">
      <img
        className="resimg"
        src={IMAGE_URL + cloudinaryImageId}
        alt="Restaurant cards"
      />
      <div className="resdetail">
        <h2>{name}</h2>
        <p className="line-two">
          <span>
            <FaStar className="cistar" />
          </span>
          <span className="rate">{avgRating}</span>
          <span>
            <GoDotFill className="dot" />
          </span>
          <span className="time">{sla.deliveryTime} mins</span>
        </p>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
