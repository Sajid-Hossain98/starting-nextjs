import styles from "./blogLoading.module.css";

const getData = async () => {
  const apiUrl = process.env.API_URL;

  //Fetching data to get data length
  const res = await fetch(`${apiUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export default async function Loading() {
  //this is just to add that after 11 tries, the issue of adding the loader is solved and cause of it was importing the same css file as the blog. always gonna create a different css file from now on if using plain css.
  //now will try to fetch data to get the length and showing loader according to that, hopefully the issue doesn't happen again

  const data = await getData();

  return (
    <div className={styles.mainLoadingContainer}>
      {[...Array(data.length).keys()].map((i) => (
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
