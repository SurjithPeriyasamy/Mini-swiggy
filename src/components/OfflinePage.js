import { RiWifiOffLine } from "react-icons/ri";
const OfflinePage = () => {
  return (
    <div className="mt-20 md:mt-48 flex items-center justify-center gap-2  text-center text-2xl font-semibold">
      Please Check Your Internet Connection!!!
      <RiWifiOffLine className="text-3xl text-red-700" />
    </div>
  );
};
export default OfflinePage;
