export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      {[...Array(10).keys()].map((i) => (
        <div
          key={i}
          style={{ height: "200px", width: "500px", backgroundColor: "#999" }}
        ></div>
      ))}
    </div>
  );
}
