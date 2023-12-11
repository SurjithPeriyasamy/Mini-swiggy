import { IMAGE_URL } from "../utils/constants";

const OnYourMindCard = ({ foodData }) => {
  const { imageId } = foodData;
  return (
    <div className="w-36">
      <img src={IMAGE_URL + imageId} alt="foood" />
    </div>
  );
};
export default OnYourMindCard;
