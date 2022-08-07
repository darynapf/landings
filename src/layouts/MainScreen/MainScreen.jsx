import styles from "./MainScreen.module.scss";
import React, { useState } from "react";
import { PlayButton } from "../../components/PlayButton";
import { DecorateElements } from "../../components/DecorateElements";
import { ContactForm } from "../../widgets/ContactForm";
import { ReactComponent as Grid } from "../../assets/svg/grid.svg";
import { clsx } from "clsx";

const MainScreen = (props) => {
  const [theme, setTheme] = useState("bubble");

  const changeTheme = () => {
    setTheme("night");
  };

  return (
    <div className={clsx(styles.background, styles[`background_${theme}`])}>
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
