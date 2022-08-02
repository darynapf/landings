import styles from "./DecorateElements.module.scss";
import { ReactComponent as Wave } from "../../assets/svg/wave.svg";
import { ReactComponent as CircleRing } from "../../assets/svg/circleRing.svg";
import { ReactComponent as Cube } from "../../assets/svg/cube.svg";
import { ReactComponent as CircleDot } from "../../assets/svg/circleDot.svg";
import { ReactComponent as Circle } from "../../assets/svg/circle.svg";

const DecorateElements = () => {
  return (
    <>
      <Wave className={`${styles.decor} ${styles.decor_wave}`} />
      <CircleRing className={`${styles.decor} ${styles.decor_circleRing}`} />
      <Cube className={`${styles.decor} ${styles.decor_cube}`} />
      <CircleDot className={`${styles.decor} ${styles.decor_circleDot}`} />
      <Circle className={`${styles.decor} ${styles.decor_circle}`} />
    </>
  );
};

export { DecorateElements };
