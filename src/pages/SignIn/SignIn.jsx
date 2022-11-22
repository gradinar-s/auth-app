import React from "react";
import Form from "../../components/application/Form/Form";
import { SIGN_IN_FIELDS } from "./constants";
import styles from "./styles.module.css";

const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign In</div>
      <Form isSignInForm fields={SIGN_IN_FIELDS} />
    </div>
  );
};

export default SignIn;
