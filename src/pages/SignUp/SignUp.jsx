import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import AuthLink from "../../components/application/AuthLink/AuthLink";
import Form from "../../components/application/Form/Form";
import Button from "../../components/ui/Button/Button";
import routePaths from "../../routes/routePaths";
import AuthService from "../../services/AuthService";
import { isEqual } from "../../utils/utils";
import { SIGN_UP_FIELDS } from "./constants";
import styles from "./styles.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { errors, setErrors, enteredData } = useContext(AuthContext);

  const payload = {
    password: enteredData["password"],
    username: enteredData["user-name"],
    displayName: enteredData["full-name"],
  };

  const handleSubmit = async () => {
    const arePasswordsEqual = isEqual(enteredData["password"], enteredData["confirm-password"]);

    if (!arePasswordsEqual) {
      return setErrors({ ...errors, "confirm-password": "Passwords should be the same" });
    }

    try {
      const { data } = await AuthService.register(payload);
      localStorage.setItem("token", data?.accessToken);
      navigate(routePaths.signIn);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  const hasErrors = Object.keys(errors).some((e) => errors[e]);
  const isEachFieldFilled = Object.keys(enteredData).every((f) => enteredData[f]);

  const isDisabled = hasErrors || !isEachFieldFilled;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign Up</div>
      <Form fields={SIGN_UP_FIELDS} />
      <Button fullWidth label="Sign Up" onClick={handleSubmit} disabled={isDisabled} />
      <div className={styles.linkWrapper}>
        <AuthLink to={routePaths.signIn} />
      </div>
    </div>
  );
};

export default SignUp;
