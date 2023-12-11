const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {[...Array(15)].map((arr, i) => (
        <div key={i} className="h-52 w-56 p-3 mb-5">
          <div className="h-44 rounded-lg bg-gray-200"></div>
          <h2 className="h-3 rounded-lg bg-gray-300"></h2>
          <h4 className="h-3 rounded-lg bg-gray-300 my-2"></h4>
          <h4 className="h-3 rounded-lg bg-gray-300"></h4>
        </div>
      ))}
    </div>
  );
};
export default ShimmerUi;
