import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const AuthLink = ({ signIn, to }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <span>{signIn ? "Don`t have account yet?" : "I have an account."}</span>
        <NavLink to={to} className={styles.link}>
          {signIn ? "New Account" : "Go to Sign in"}
        </NavLink>
      </div>
    </div>
  );
};

export default AuthLink;
