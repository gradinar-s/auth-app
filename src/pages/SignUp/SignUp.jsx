import React from "react";
import Form from "../../components/application/Form/Form";
import { SIGN_UP_FIELDS } from "./constants";
import styles from "./styles.module.css";

const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign Up</div>
      <Form fields={SIGN_UP_FIELDS} />
    </div>
  );
};

export default SignUp;
