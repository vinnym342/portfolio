import { FC } from "react";
import styles from "./style.module.scss";
import Button from "../Button";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import classnames from "classnames";

type Props = {};

const LatePage: FC<Props> = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.bg} />
      <div className={classnames(styles.bg, styles.bg2)} />
      <div className={classnames(styles.bg, styles.bg3)} />
      <div className={styles.content}>
        <p>
          Hi, I'm <span className={styles.name}>Vincent Marcos</span>
          <br />
          I'm a full-stack developer
        </p>
        <Button className={styles.getStartedButton}>
          <p>Get started</p> <ArrowRight className={styles.arrow} />
        </Button>
      </div>
    </div>
  );
};

export default LatePage;
