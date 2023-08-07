import Link from "next/link";
import { links } from "./Navbar";
import styles from "./navbar.module.css";

const SideNavbar = ({ signOut, session, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div className={styles.sideBarLinks}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.linkMini}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <button className={styles.logoutMini} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default SideNavbar;
