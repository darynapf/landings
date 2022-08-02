import styles from "./PlayButton.module.scss";
import { ReactComponent as PlayButtonIcon } from "../../assets/svg/playIcon.svg";

const PlayButton = (props) => {
  return (
    <button className={styles.playButton} onClick={props.onClick}>
      <PlayButtonIcon className={styles.playButton__icon} />
    </button>
  );
};

export { PlayButton };
