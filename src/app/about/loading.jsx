import React from "react";
import styles from "./aboutLoading.module.css";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.topLoader}></div>
      <div className={styles.bottomLoader}>
        <div className={styles.leftLoader}></div>
        <div className={styles.rightLoader}></div>
      </div>
    </div>
  );
};

export default Loading;
