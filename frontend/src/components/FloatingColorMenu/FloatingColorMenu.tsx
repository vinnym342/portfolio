import { FC, useState } from "react";
import classnames from "classnames";
import Fab from "@material-ui/core/Fab";
import UpIcon from "@material-ui/icons/ChevronLeft";
import colorWheelPng from "../../assets/colorWheel.png";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { ColorMenuOption } from "../../common/interfaces";
import styles from "./style.module.scss";

type Props = {
  colorMenuOptions: ColorMenuOption[];
  onColorClick: (colorScheme: ColorMenuOption) => void;
};

const tilePalette = (paletteStyle: string) => (
  <div className={classnames(paletteStyle, styles.tilePalette)}>
    <div className={styles.main}>
      <div className={styles.primary} />
      <div className={styles.secondary} />
      <div className={styles.tertiary} />
    </div>
  </div>
);

const LatePage: FC<Props> = ({ colorMenuOptions, onColorClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Fab
        style={{ position: "fixed", zIndex: 1, top: "10px", left: "10px" }}
        color="primary"
        onClick={handleClick}
        aria-label="add"
        className={styles.colorMenu}
        data-aos="fade-in"
        data-aos-once="true"
      >
        <img src={colorWheelPng} alt="change color item" />
      </Fab>
      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <div className={styles.drawerHeader}>
          <Button className={styles.drawerClose} onClick={handleClose}>
            <UpIcon />
          </Button>
        </div>
        <div className={styles.drawerContainer}>
          <div className={styles.drawerContent}>
            <GridList cols={1} className={styles.gridList}>
              {colorMenuOptions.map((tile, i) => (
                <GridListTile
                  key={tile.label}
                  onClick={() => onColorClick(tile)}
                >
                  {tilePalette(tile.colorSchemeStyle)}
                  <GridListTileBar title={tile.label} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LatePage;
