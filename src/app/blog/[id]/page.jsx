import React from "react";
import styles from "./blogPost.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className={styles.topDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            odit obcaecati numquam labore recusandae repellendus quas vero
            officiis atque iusto ea provident sed, asperiores corrupti cum
            accusamus molestiae id facere?
          </p>

          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.userName}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.bottomDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          harum delectus illum totam amet tempora. Dolorem, fugit. Itaque,
          dolorem! Voluptate consequuntur, incidunt fugiat quos ullam explicabo
          velit inventore, exercitationem quod perspiciatis repudiandae optio
          quibusdam laboriosam in repellat! Dolores veritatis ad assumenda totam
          consectetur quas molestiae maxime molestias, ducimus veniam
          exercitationem accusamus commodi, vitae, corrupti animi? Sunt a
          possimus saepe suscipit. Consequuntur nam, corrupti magnam mollitia
          cum neque eligendi nisi dicta voluptas quam modi. Est fugit, minima
          nemo similique recusandae eligendi sint officia dolorem tempore quasi.
          Ullam rem voluptas cum minus id nemo cupiditate voluptates modi quam
          iure laboriosam, et beatae vero perspiciatis! Commodi, veritatis
          blanditiis minima ut id voluptas quam ratione repudiandae ipsam
          impedit possimus, molestias officiis obcaecati eius odit rerum
          laudantium, sequi quae veniam est. Repudiandae illo temporibus nobis
          in corporis, sunt aspernatur natus magnam et maxime perferendis.
          Aperiam ut pariatur neque iure. Sequi nihil rem, rerum quisquam
          repudiandae repellat placeat necessitatibus sed dolores blanditiis
          officia, molestias ullam temporibus facere unde voluptatem corrupti,
          praesentium vero est voluptatibus reprehenderit expedita aperiam quos.
          Praesentium a, placeat tempora obcaecati, iste commodi sunt beatae vel
          facere repudiandae, tenetur veniam sequi maxime aspernatur quis
          quisquam animi alias aliquid eum odio vero dolorum repellat. Quaerat.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
