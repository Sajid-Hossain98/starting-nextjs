import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((data) => {
        const { id, title, body } = data;
        return (
          <Link href="blog/test" className={styles.container} key={id}>
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={400}
                height={250}
                className={styles.img}
              />
            </div>

            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
