const ShimmerUi = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {[...Array(15)].map((arr, i) => (
        <div
          key={i}
          style={{
            height: "180px",
            width: "220px",
            padding: "10px",
          }}
        >
          <div
            style={{
              height: "150px",
              borderRadius: "20px",
              backgroundColor: "gray",
            }}
          ></div>
          <h2
            style={{
              height: "10px",
              marginBottom: "5px",
              borderRadius: "10px",
              backgroundColor: "coral",
            }}
          ></h2>
          <h4
            style={{
              height: "10px",
              marginBottom: "5px",
              borderRadius: "10px",
              backgroundColor: "coral",
            }}
          ></h4>
          <h4
            style={{
              height: "10px",
              marginBottom: "5px",
              borderRadius: "10px",
              backgroundColor: "coral",
            }}
          ></h4>
        </div>
      ))}
    </div>
  );
};
export default ShimmerUi;
