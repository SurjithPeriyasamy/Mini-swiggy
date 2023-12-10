import { IMAGE_URL } from "../utils/constants";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
const ItemList = ({ item }) => {
  const { name, imageId, price, defaultPrice, itemAttribute, description } =
    item;
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {itemAttribute.vegClassifier === "VEG" ? (
          <GoDotFill style={{ color: "green", border: "2px solid green" }} />
        ) : (
          <TiArrowSortedUp style={{ color: "red", border: "2px solid red" }} />
        )}
        <h4>{name}</h4>
        <h4>
          <LiaRupeeSignSolid /> {defaultPrice / 100 || price / 100}
        </h4>
        <p>{description}</p>
      </div>
      <div>
        <img height="100" width="100" src={IMAGE_URL + imageId} alt="food" />
      </div>
    </div>
  );
};
export default ItemList;
