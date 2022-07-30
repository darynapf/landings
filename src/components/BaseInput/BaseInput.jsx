import styles from "./BaseInput.module.scss";

const BaseInput = (props) => {
  return (
    <label className={styles.input}>
      <span className={styles.input__title}>{props.title}</span>
      <input
        className={styles.input__control}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </label>
  );
};

export { BaseInput };
