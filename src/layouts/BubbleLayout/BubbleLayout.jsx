import styles from "./BubbleLayout.module.scss";
import { PlayButton } from "../../components/PlayButton";
import { ContactForm } from "../../widgets/ContactForm";

const BubbleLayout = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__title}>
            We help you <br /> make modern <br />
            design
          </div>
          <div className={styles.content__buttons}>
            <PlayButton />
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

export { BubbleLayout };
