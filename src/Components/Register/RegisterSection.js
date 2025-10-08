import IntroductionBackground from "../About/IntroductionBackground";
import RegisterForm from "./RegisterForm";
import styles from "./RegisterSection.module.css";

const RegisterSection = () => {
  return (
    <section className={`${styles["register-section"]}`}>
      <IntroductionBackground />
      <h1 className={`text-center fw-bold pt-4 pb-4 fs-2 text-light`}>
        Become <span className={`text-primary`}>DevComm</span> Member
      </h1>
      <RegisterForm />
    </section>
  );
};

export default RegisterSection;
