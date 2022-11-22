import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import styles from "./styles.module.css";
import vector from "../../images/vector.svg";
import routePaths from "../../routes/routePaths";

const Home = () => {
  const navigate = useNavigate();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      navigate(routePaths.signIn);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Congratulations</div>
      </div>
      <div className={styles.text}>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </div>
      <div className={styles.buttonWrapper}>
        <Button label="Log Out" />
      </div>
      <div className={styles.imageWrapper}>
        <img src={vector} alt="Vector" />
      </div>
    </div>
  );
};

export default Home;
