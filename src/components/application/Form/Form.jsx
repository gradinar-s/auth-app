import React, { useState } from "react";
import routePaths from "../../../routes/routePaths";
import { getInitialFields } from "../../../utils/utils";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import AuthLink from "../AuthLink/AuthLink";
import styles from "./styles.module.css";

const Form = ({ fields, isSignInForm }) => {
  const initialFields = getInitialFields(fields);
  const buttonLabel = isSignInForm ? "Sign In" : "Sign Up";
  const authLink = isSignInForm ? routePaths.signUp : routePaths.signIn;

  const [enteredData, setEnteredData] = useState(initialFields);
  const [errors, setErrors] = useState(initialFields);

  const validateRequiredField = (event) => {
    const { name, value } = event.target;

    if (!value) {
      setErrors({ ...errors, [name]: "This is a required field" });
    }

    if (value) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  //   const validateEqualPasswords = (event) => {
  //     const { name, value } = event.target;

  //     if (value !== enteredData["password"]) {
  //       return setErrors({ ...errors, [name]: "Passwords should match" });
  //     }

  //     if (value === enteredData["password"]) {
  //       return setErrors({ ...errors, [name]: "" });
  //     }
  //   };

  const handleChange = (event) => {
    const { name, value } = event.target;

    validateRequiredField(event);

    setEnteredData({ ...enteredData, [name]: value });
  };

  const handleClick = () => {
    console.log(enteredData);
  };

  const hasErrors = Object.keys(errors).some((e) => errors[e]);
  const isEachFieldFilled = Object.keys(enteredData).every((f) => enteredData[f]);

  const isDisabledButton = hasErrors || !isEachFieldFilled;

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name} className={styles.inputWrapper}>
          <Input
            name={field.name}
            type={field.type}
            label={field.label}
            onChange={handleChange}
            placeholder={field.label}
            error={errors[field.name]}
            // onBlur={validateEqualPasswords}
            value={enteredData?.[field.name]}
          />
        </div>
      ))}
      <Button fullWidth disabled={isDisabledButton} label={buttonLabel} onClick={handleClick} />
      <div className={styles.linkWrapper}>
        <AuthLink signIn={isSignInForm} to={authLink} />
      </div>
    </div>
  );
};

export default Form;
