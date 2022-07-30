import styles from "./BaseButton.module.scss";

const BaseButton = (props) => {
  return <button className={styles.button}>{props.name}</button>;
};

export { BaseButton };
