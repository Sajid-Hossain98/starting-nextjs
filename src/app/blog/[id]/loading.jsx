import React from "react";
import styles from "./blogPostLoading.module.css";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.topLoader}>
        <div className={styles.leftLoader}></div>
        <div className={styles.rightLoader}></div>
      </div>
      <div className={styles.bottomLoader}></div>
    </div>
  );
};

export default Loading;
