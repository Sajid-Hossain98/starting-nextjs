import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  //providing different apiUrl for both development and production
  let apiUrl;
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:3000/api/posts";
  } else {
    apiUrl = "https://starting-nextjs.vercel.app/api/posts";
  }

  //Fetching data
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  // return (
  //   <div className={styles.mainContainer}>
  //     {data.map((data) => {
  //       const { _id, title, desc, img } = data;
  //       return (
  //         <Link href={`blog/${_id}`} className={styles.container} key={_id}>
  //           <div className={styles.imgContainer}>
  //             <Image
  //               src={img}
  //               alt={title}
  //               width={400}
  //               height={250}
  //               className={styles.img}
  //             />
  //           </div>

  //           <div className={styles.content}>
  //             <h1 className={styles.title}>{title}</h1>
  //             <p className={styles.desc}>{desc}</p>
  //           </div>
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );
};

export default Blog;
