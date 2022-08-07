import styles from "./BaseInput.module.scss";
import { clsx } from "clsx";

const BaseInput = (props) => {
  return (
    <label className={styles.input}>
      <span
        className={clsx(
          styles.input__title,
          styles[`input__title_${props.theme}`]
        )}
      >
        {props.title}
      </span>
      <input
        className={clsx(
          styles.input__control,
          styles[`input__control_${props.theme}`]
        )}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </label>
  );
};

export { BaseInput };
