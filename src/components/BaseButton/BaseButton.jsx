import styles from "./BaseButton.module.scss";

const BaseButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.button__name}>{props.name}</span>
    </button>
  );
};

export { BaseButton };
