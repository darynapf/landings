import { BaseInput } from "../../components/BaseInput/BaseInput";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import styles from "./ContactForm.module.scss";
import { clsx } from "clsx";

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
      theme={props.theme}
    />
  ));

  return (
    <form
      action="https://mailthis.to/daryna.parfeniuk@gmail.com"
      method="POST"
      className={styles.form}
    >
      <div
        className={clsx(
          styles.form__container,
          styles[`form__container_${props.theme}`]
        )}
      >
        <div
          className={clsx(
            styles.form__title,
            styles[`form__title_${props.theme}`]
          )}
        >
          {props.title}
        </div>
        <div className={styles.form__inputs}>{inputList}</div>
        <div
          className={clsx(
            styles.form__agreement,
            styles[`form__agreement_${props.theme}`]
          )}
        >
          By clicking the button you are accepting the terms of the main
          agreement
        </div>
        <BaseButton name="send" type="submit" theme={props.theme} />
      </div>
    </form>
  );
};

export { ContactForm };
