import React from "react";
import { Footer, Navbar } from ".";

import styles from "./Layout.module.scss"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <div className={styles.layout}>
    <Navbar/>
    {children}
    <Footer/>
  </div>
  );
};

export default Layout;
