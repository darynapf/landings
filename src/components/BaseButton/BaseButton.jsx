import styles from "./BaseButton.module.scss";
import { clsx } from "clsx";

const BaseButton = (props) => {
  return (
    <button
      className={clsx(styles.button, styles[`button_${props.theme}`])}
      type={props.type}
    >
      <span
        className={clsx(
          styles.button__name,
          styles[`button__name_${props.theme}`]
        )}
      >
        {props.name}
      </span>
    </button>
  );
};

export { BaseButton };
