import styles from "./BubbleLayout.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { PlayButton } from "../../components/PlayButton";
import { DecorateElements } from "../../components/DecorateElements";
import { ContactForm } from "../../widgets/ContactForm";
import { ReactComponent as Grid } from "../../assets/svg/grid.svg";

const BubbleLayout = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__title}>
            We help you <br /> make modern <br />
            design
          </div>
          <Grid className={styles.content__background} />
          <div className={styles.content__buttons}>
            <Link to="/night">
              <PlayButton
                onClick={props.playButton}
                name="Check how it works"
              />
            </Link>
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm title="Contact information" />
        </div>
      </div>
      <DecorateElements />
    </div>
  );
};

export { BubbleLayout };
