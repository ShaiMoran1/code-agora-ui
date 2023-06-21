import React from "react";

import styles from "./Footer.module.scss"
import { UpArrowIcon } from "../../components/Icon/Icon";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className={styles.footer}>
        <UpArrowIcon className={styles.arrowIcon}/>
      </div>
    </>
  );
};

export default Footer;
