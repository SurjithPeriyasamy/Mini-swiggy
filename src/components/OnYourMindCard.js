import { IMAGE_URL } from "../utils/constants";

const OnYourMindCard = ({ foodData }) => {
  const { imageId } = foodData;
  return (
    <div className="mindcard">
      <img src={IMAGE_URL + imageId} alt="foood" />
    </div>
  );
};
export default OnYourMindCard;
