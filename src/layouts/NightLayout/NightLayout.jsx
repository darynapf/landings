import styles from "./NightLayout.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { PlayButton } from "../../components/PlayButton";
import { ContactForm } from "../../widgets/ContactForm";
import { ReactComponent as Grid } from "../../assets/svg/grid.svg";

const NightLayout = (props) => {
  return (
    <div className={styles.background}>
      <video autoplay muted loop className={styles.background__video}>
        <source src="../../assets/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__title}>
            We help you <br /> make modern <br />
            design
          </div>
          <Grid className={styles.content__background} />
          <div className={styles.content__buttons}>
            <Link to="/">
              <PlayButton onClick={props.playButton} />
            </Link>
            <span className={styles.content__text}>Check how it works</span>
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm title="Contact information" />
        </div>
      </div>
    </div>
  );
};

export { NightLayout };
