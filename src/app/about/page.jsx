import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt="web"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Programmers</h1>
          <h2 className={styles.imgDesc}>
            Hardworking award winning group of a people
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            As an innovative IT company, we are dedicated to delivering
            cutting-edge solutions that empower businesses and individuals to
            thrive in the digital world.
            <br />
            Our team of skilled and passionate professionals is committed to
            providing top-notch services across various domains, including web
            development, mobile app development, cloud computing, AI, and more.
            <br />
            <br />
            Our relentless pursuit of excellence, combined with a deep
            understanding of emerging technologies, enables us to stay at the
            forefront of the IT industry, delivering unmatched value to our
            clients and partners.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            As a leading IT company, we are driven by a passion for technology
            and a commitment to delivering innovative solutions. Our expertise
            lies in web and mobile application development, software
            engineering, and data analytics. With a focus on user-friendly
            interfaces and top-notch security measures.
            <br />
            <br />
            -Web and mobile application development
            <br />
            <br />
            -Data analytics and software engineering
            <br />
            <br />
            -Utilization of AI and machine learning technologies.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
