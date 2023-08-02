import React from "react";
import styles from "./blog.module.css";

// const getData = async () => {
//   const apiUrl = process.env.API_URL;

//   //Fetching data
//   const res = await fetch(`${apiUrl}/api/posts`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   }

//   return res.json();
// };

const Loading = async () => {
  // const data = await getData();

  return (
    <div>
      {/* {[...Array(data.length).keys()].map((i) => (
        <div
          key={i._id}
          className={styles.loadingContainer}
          style={{
            animationDelay: `${i * 0.05}s`,
          }}
        >
          <div className={styles.loadingImgContainer}>
            <div className={styles.loadingImg} />
          </div>

          <div className={styles.loadingContent}>
            <h1 className={styles.loadingTitle}></h1>
            <p className={styles.loadingDesc}></p>
          </div>
        </div>
      ))} */}

      {[...Array(10).keys()].map((i) => (
        <div
          key={i}
          style={{ height: "200px", width: "500px", backgroundColor: "#999" }}
        ></div>
      ))}
    </div>
  );

  // return data?.map((dataArray) => (
  //   <div key={dataArray._id}>
  //     <div className={styles.loadingImgContainer}>
  //       <div className={styles.loadingImg} />
  //     </div>

  //     <div className={styles.loadingContent}>
  //       <h1 className={styles.loadingTitle}></h1>
  //       <p className={styles.loadingDesc}></p>
  //     </div>
  //   </div>
  // ));
};

export default Loading;
