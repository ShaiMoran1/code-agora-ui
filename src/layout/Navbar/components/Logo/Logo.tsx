import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  const navigator = useNavigate();
  const onLogoClickHandler = () => {
    navigator("/");
  };
  return (
    <div className={styles.logoContainer} onClick={onLogoClickHandler}>
      CodeAgora
    </div>
  );
};

export default Logo;
