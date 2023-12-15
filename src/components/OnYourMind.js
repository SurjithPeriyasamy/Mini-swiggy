import { useSelector } from "react-redux";
import OnYourMindCard from "./OnYourMindCard";
import { Link } from "react-router-dom";

const OnYourMind = () => {
  const mindList = useSelector((store) => store.restaurants.onMindLists);
  const { info } = mindList?.imageGridCards;
  const { title } = mindList?.header;

  const ans = info[1].action.link;

  return !mindList ? null : (
    <div className="py-5 text-center lg:text-start m-auto ">
      <h2 className="text-xl font-bold pb-4">{title}</h2>
      <div className="flex gap-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-600 scrollbar-track-gray-100">
        {info.map((food) => (
          <Link
            to={`/collection/${food.action.link.slice(
              ans.indexOf("=") + 1
            )}&item=${food.action.text}`}
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
