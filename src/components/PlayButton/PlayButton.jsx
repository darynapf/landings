import styles from "./PlayButton.module.scss";
import { clsx } from "clsx";
import { ReactComponent as PlayButtonIcon } from "../../assets/svg/playIcon.svg";

const PlayButton = (props) => {
  return (
    <button className={styles.playButton} onClick={props.onClick}>
      <div className={styles.playButton__box}>
        <PlayButtonIcon className={styles.playButton__icon} />
      </div>
      <span
        className={clsx(
          styles.playButton__text,
          styles[`playButton__text_${props.theme}`]
        )}
      >
        {props.name}
      </span>
    </button>
  );
};

export { PlayButton };
