import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import AuthLink from "../../components/application/AuthLink/AuthLink";
import Form from "../../components/application/Form/Form";
import Button from "../../components/ui/Button/Button";
import routePaths from "../../routes/routePaths";
import AuthService from "../../services/AuthService";
import { SIGN_IN_FIELDS } from "./constants";
import styles from "./styles.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { errors, enteredData } = useContext(AuthContext);

  const payload = { password: enteredData["password"], username: enteredData["user-name"] };

  const handleSubmit = async () => {
    try {
      const { data } = await AuthService.login(payload);
      localStorage.setItem("token", data?.accessToken);
      setAuth(true);
      navigate(routePaths.base);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  const hasErrors = Object.keys(errors).some((e) => errors[e]);
  const isEachFieldFilled = Object.keys(enteredData).every((f) => enteredData[f]);

  const isDisabledButton = hasErrors || !isEachFieldFilled;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign In</div>
      <Form fields={SIGN_IN_FIELDS} />
      <Button fullWidth disabled={isDisabledButton} label="Sign In" onClick={handleSubmit} />
      <div className={styles.linkWrapper}>
        <AuthLink signIn to={routePaths.signUp} />
      </div>
    </div>
  );
};

export default SignIn;
