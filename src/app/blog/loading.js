import styles from "./blogLoading.module.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.mainLoadingContainer}>
      {[...Array(10).keys()].map((i) => (
        <div
          key={i}
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
      ))}
    </div>
  );
}
