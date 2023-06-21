import React from "react";

import styles from "./Navbar.module.scss";
import Logo from "./components/Logo/Logo";
import NavbarItem from "./components/NavbarItem/NavbarItem";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const items = [
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Create",
      link: "/create",
    },
    {
      title: "About Us",
      link: "/about",
    },
  ];
  return (
    <>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navbarItemsContainer}>
          {items.map((item) => (
            <NavbarItem key={item.title} title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
