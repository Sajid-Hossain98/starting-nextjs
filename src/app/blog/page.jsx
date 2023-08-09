import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const apiUrl = process.env.API_URL;

  //Fetching data
  const res = await fetch(`${apiUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export const metadata = {
  title: "Blogs",
  description: "All the blog posts",
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((data) => {
        const { _id, title, desc, img } = data;
        return (
          <Link href={`blog/${_id}`} className={styles.container} key={_id}>
            <div className={styles.imgContainer}>
              <Image
                src={img}
                alt={title}
                fill={true}
                // width={400}
                // height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
