import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import ContactImg from "public/contact-us.png";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Let&apos;s Stay in Touch</h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={ContactImg} alt="contact us" className={styles.img} />
        </div>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="email"
            className={styles.input}
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
