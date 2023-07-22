import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 SH, All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/" target="_blank">
          <Image src="/1.png" width={16} height={16} alt="socials-fb" />
        </Link>

        <Link href="https://www.instagram.com/" target="_blank">
          <Image src="/2.png" width={16} height={16} alt="socials-instagram" />
        </Link>

        <Link href="https://www.twitter.com/" target="_blank">
          <Image src="/3.png" width={16} height={16} alt="socials-twitter" />
        </Link>

        <Link href="https://www.youtube.com/" target="_blank">
          <Image src="/4.png" width={16} height={16} alt="socials-yt" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
