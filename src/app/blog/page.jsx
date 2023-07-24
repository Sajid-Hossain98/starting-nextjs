import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/test" className={styles.container}>
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
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/test" className={styles.container}>
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
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/test" className={styles.container}>
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
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/test" className={styles.container}>
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
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/test" className={styles.container}>
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
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
