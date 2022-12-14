import styles from "./MainScreen.module.scss";
import React, { useState } from "react";
import { PlayButton } from "../../components/PlayButton";
import { DecorateElements } from "../../components/DecorateElements";
import { ContactForm } from "../../widgets/ContactForm";
import { ReactComponent as Grid } from "../../assets/svg/grid.svg";
import { clsx } from "clsx";
import video from "../../assets/videos/video.mp4";

const MainScreen = () => {
  const [theme, setTheme] = useState("bubble");

  const changeTheme = () => {
    return theme === "bubble" ? setTheme("night") : setTheme("bubble");
  };

  return (
    <div className={clsx(styles.background, styles[`background_${theme}`])}>
      {theme === "night" && (
        <video
          src={video}
          className={styles.video}
          muted="true"
          autoplay="true"
          loop="true"
        />
      )}
      <div className={styles.container}>
        <div className={styles.content}>
          <div
            className={clsx(
              styles.content__title,
              styles[`content__title_${theme}`]
            )}
          >
            We help you <br /> make modern <br />
            design
          </div>
          {theme === "bubble" && (
            <Grid className={styles.content__background} />
          )}
          <div className={styles.content__buttons}>
            <PlayButton
              onClick={changeTheme}
              name="Check how it works"
              theme={theme}
            />
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm title="Contact information" theme={theme} />
        </div>
      </div>
      {theme === "bubble" && <DecorateElements />}
    </div>
  );
};

export { MainScreen };
