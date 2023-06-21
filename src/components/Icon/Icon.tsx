import { ReactComponent as UpArrowIconSvg } from "../../assets/svg/up-arrow.svg";
import c from "classnames";
import styles from "./Icon.module.scss";

export const UpArrowIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div className={c(className, styles.icon)}>
    <UpArrowIconSvg className={className} />
  </div>
);
