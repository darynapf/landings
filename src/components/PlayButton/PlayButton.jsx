import styles from "./PlayButton.module.scss";
import { ReactComponent as PlayButtonIcon } from "../../assets/svg/playIcon.svg";

const PlayButton = (props) => {
  const onClick = async (event) => {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    circle.classList.add(styles.playButton__ripple);
    button.insertBefore(circle, button);
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top
    }px`;
    circle.onanimationend = () => {
      if (button) button.removeChild(circle);
    };

    // await props.onClick();
  };

  return (
    <button className={styles.playButton} onClick={onClick}>
      <PlayButtonIcon className={styles.playButton__icon} />
    </button>
  );
};

export { PlayButton };
