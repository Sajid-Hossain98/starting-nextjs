import styles from "./blog.module.css";

const getData = async () => {
  const apiUrl = process.env.API_URL;

  //Fetching data to get the length
  const res = await fetch(`${apiUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export default async function Loading() {
  const data = await getData();

  return (
    <div className={styles.mainLoadingContainer}>
      {[...Array(data.length).keys()].map((i) => (
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
      ))}
    </div>
  );
}
