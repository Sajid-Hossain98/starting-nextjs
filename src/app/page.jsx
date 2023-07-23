import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Your true digital support for 24/7</h1>
        <p className={styles.description}>
          Just knock us with your ideas and we will bring it to reality with
          future support for maintenance.
        </p>
        <Button
          url="/portfolio"
          text="Check Our Works"
          className={styles.button}
        />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="hero image" className={styles.img} />
      </div>
    </div>
  );
}
