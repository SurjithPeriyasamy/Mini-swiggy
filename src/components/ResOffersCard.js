import { IMAGE_URL } from "../utils/constants";

const ResOffersCard = ({ resOffers }) => {
  const { offerLogo, couponCode, header, description, offerTag } =
    resOffers.info;
  return (
    <div
      className={
        "relative flex justify-center items-center py-4 " +
        (offerTag ? "pl-7 pr-3" : "px-3")
      }
    >
      {offerTag && (
        <label className="absolute -left-4 border-b m-0 p-0 -rotate-90 text-orange-600 text-[9px] tracking-wide font-bold">
          {offerTag}
        </label>
      )}

      <div>
        <div className="flex items-center gap-1 font-bold text-sm text-gray-500">
          <img
            className="max-h-[18px] w-[18px]"
            src={IMAGE_URL + offerLogo}
            alt="offerLogo"
          />
          <h2>{header}</h2>
        </div>
        <h4 className="font-semibold tracking-tighter text-xs text-gray-400">
          {`${couponCode ? couponCode : ""} | ${description}`}
        </h4>
      </div>
    </div>
  );
};
export default ResOffersCard;
