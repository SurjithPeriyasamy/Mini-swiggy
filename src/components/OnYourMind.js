import OnYourMindCard from "./OnYourMindCard";
import { Link } from "react-router-dom";
const OnYourMind = ({ mindList }) => {
  const { info } = mindList?.imageGridCards;
  const { title } = mindList?.header;
  return (
    <div>
      <h2>{title}</h2>
      <div className="mind">
        {info.map((food) => (
          <Link
            to={
              "/collection/" +
              food.entityId.slice(36, 41) +
              "_" +
              food.action.text.split(" ").join("")
            }
            key={food.id}
          >
            <OnYourMindCard foodData={food} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default OnYourMind;
