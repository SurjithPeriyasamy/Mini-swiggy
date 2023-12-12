import { useSelector } from "react-redux";
import OnYourMindCard from "./OnYourMindCard";
import { Link } from "react-router-dom";

const OnYourMind = () => {
  const mindList = useSelector((store) => store.restaurants.onMindLists);
  const { info } = mindList?.imageGridCards;
  const { title } = mindList?.header;

  return !mindList ? null : (
    <div className="py-5">
      <h2 className="text-2xl font-bold pb-4">{title}</h2>
      <div className="flex gap-8 overflow-x-scroll">
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
