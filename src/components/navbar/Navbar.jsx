"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import SideNavbar from "./SideNavbar";

export const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        SH
      </Link>

      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <div className={styles.sideNavbar}>
          <button
            className={`${styles.toggleMenu} ${
              isMenuOpen ? `${styles.openMenu}` : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.hamburger}></span>
          </button>

          {/* <div className={styles.sideBar}>
            <SideNavbar />
          </div> */}
        </div>

        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
