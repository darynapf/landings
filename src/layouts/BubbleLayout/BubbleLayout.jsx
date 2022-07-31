import styles from "./BubbleLayout.module.scss";
import React, { useState } from "react";
import { PlayButton } from "../../components/PlayButton";
import { DecorateElements } from "../../components/DecorateElements";
import { ContactForm } from "../../widgets/ContactForm";
import { ReactComponent as Grid } from "../../assets/svg/grid.svg";

const BubbleLayout = () => {
  const [mousePosition, setMousePosition] = useState({
    pageX: 0,
    pageY: 0,
  });

  const handleMouseMove = (event) => {
    setMousePosition({ pageX: event.pageX, pageY: event.pageY });
  };

  return (
    <div
      className={styles.background}
      onMouseMove={(ev) => handleMouseMove(ev)}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__title}>
            We help you <br /> make modern <br />
            design
          </div>
          <Grid className={styles.content__background} />
          <div className={styles.content__buttons}>
            <PlayButton />
            <span className={styles.content__text}>Check how it works</span>
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm title="Contact information" />
        </div>
      </div>
      <DecorateElements moveEvent={mousePosition} />
    </div>
  );
};

export { BubbleLayout };
