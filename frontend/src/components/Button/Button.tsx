import { FC, ReactNode } from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import styles from "./style.module.scss";

type Props = {
  children: ReactNode;
  className: string;
};

const LatePage: FC<Props> = ({ children, className: propClassName }) => {
  return (
    <Button
      variant="outlined"
      className={classNames(styles.primaryButton, propClassName)}
    >
      {children}
    </Button>
  );
};

export default LatePage;
