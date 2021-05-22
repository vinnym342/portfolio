import { FC } from "react";
import styles from "./style.module.scss";

interface SkillInterface {
  name: string;
  rating: number;
}

type Props = {};

const skills: SkillInterface[] = [
  { name: "React.JS", rating: 4 },
  { name: "Node.JS", rating: 4 },
  { name: "Typescript", rating: 4 },
  { name: "Git", rating: 4 },
  { name: "Express.js", rating: 4 },
  { name: "Yarn & NPM", rating: 4 },
  { name: "HTML5", rating: 4 },
  { name: "Sass", rating: 4 },
  { name: "GraphQL", rating: 3 },
  { name: "Ruby/Rails", rating: 3 },
  { name: "Automated Testing", rating: 3 },
  { name: "MySQL", rating: 3 },
  { name: "Flutter", rating: 3 },
  { name: "Docker", rating: 1 }
];
console.log(styles.aboutSection);
console.log(styles.adsf);
const LatePage: FC<Props> = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.title} data-aos="fade-in" data-aos-once="true">
        <h1>ABOUT</h1>
        <div className={styles.headerBar} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LatePage;
