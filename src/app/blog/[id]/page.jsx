import React from "react";
import styles from "./blogPost.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const apiUrl = process.env.API_URL;

  //Fetching data
  const res = await fetch(`${apiUrl}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound;
  }

  return res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.topDesc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.userName}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.img}
            alt={data.title}
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.bottomDesc}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
