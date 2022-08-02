import { BaseInput } from "../../components/BaseInput/BaseInput";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import styles from "./ContactForm.module.scss";

const ContactForm = (props) => {
  const contactsInfo = [
    { type: "text", placeholder: "Enter your name", title: "your name" },
    { type: "email", placeholder: "Enter your email", title: "your email" },
    { type: "tel", placeholder: "Enter your phone", title: "your phone" },
  ];

  const inputList = contactsInfo.map((e) => (
    <BaseInput
      type={e.type}
      placeholder={e.placeholder}
      title={e.title}
      value={props.value}
    />
  ));

  return (
    <div className={styles.form}>
      <div className={styles.form__container}>
        <div className={styles.form__title}>{props.title}</div>
        <div className={styles.form__inputs}>{inputList}</div>
        <div className={styles.form__agreement}>
          By clicking the button you are accepting the terms of the main
          agreement
        </div>
        <BaseButton name="send" />
      </div>
    </div>
  );
};

export { ContactForm };
