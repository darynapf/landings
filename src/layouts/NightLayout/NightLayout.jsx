import styles from "./NightLayout.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { PlayButton } from "../../components/PlayButton";
import { ContactForm } from "../../widgets/ContactForm";

const NightLayout = (props) => {
  const theme = "night";

  return (
    <div className={styles.background}>
      <div className={styles.background__bg}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__title}>
            We help you <br /> make modern <br />
            design
          </div>
          <div className={styles.content__buttons}>
            <Link to="/landings">
              <PlayButton
                onClick={props.playButton}
                name="Check how it works"
                theme={theme}
              />
            </Link>
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm title="Contact information" theme={theme} />
        </div>
      </div>
    </div>
  );
};

export { NightLayout };