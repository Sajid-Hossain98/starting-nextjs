export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  return (
    <div>
      {[...Array(10).keys()].map((i) => (
        <div
          key={i._id}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "15px 0px",
            height: "200px",
            width: "800px",
            backgroundColor: "#9999994f",
          }}
        ></div>
      ))}
    </div>
  );
}
