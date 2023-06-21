import { useNavigate } from "react-router-dom";
import styles from "./NavbarItem.module.scss";

interface NavbarItemProps {
  title: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, link }) => {
  const navigator = useNavigate();

  const onNavbarItemHandler = () => {
    navigator(link);
  };

  return (
    <div className={styles.navbarItemContainer} onClick={onNavbarItemHandler}>
      <div className={styles.navbarItemTitle}>{title}</div>
    </div>
  );
};

export default NavbarItem;
