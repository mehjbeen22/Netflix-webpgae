import React from "react";
import styles from "./sixthSec.module.css";
import PlusIconImage from "./image/PlusIcon.webp";

const Sixthsection = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 style={{ fontSize: "3.4rem",color:'white'}}>Frequently Asked Questions</h1>
        <div className={styles.QCase}>
          <div className={styles.questionblock}>
            <p className={styles.ptag}> What is Netflix ?</p>
            <img src={PlusIconImage} className={styles.PlusIconImage} />
          </div>

          <div className={styles.questionblock}>
            <p className={styles.ptag}> How much does Netflix cost ?</p>
            <img src={PlusIconImage} className={styles.PlusIconImage} />
          </div>

          <div className={styles.questionblock}>
            <p className={styles.ptag}> Where can I watch ?</p>
            <img src={PlusIconImage} className={styles.PlusIconImage} />
          </div>

          <div className={styles.questionblock}>
            <p className={styles.ptag}> How do I cancel ?</p>
            <img src={PlusIconImage} className={styles.PlusIconImage} />
          </div>

          <div className={styles.questionblock}>
            <p className={styles.ptag}> What can I watch on Netflix?</p>
            <img src={PlusIconImage} className={styles.PlusIconImage} />
          </div>

          <div className={styles.questionblock}>
            <p className={styles.ptag}> Is Netflix good for kids ?</p>
            <img src={PlusIconImage} className={styles.PlusIconImage} />
          </div>
        </div>

        <p style={{ color: "white", marginBlock: "8px", fontSize: "1.6rem" }}>
        Ready to watch? Enter your email to create or restart your
        membership.
      </p>

        <div className={styles.inputCase}>
          <input
            type="email"
            placeholder="Email address"
            className={styles.inputBox}
          />
          <button type="submit" className={styles.submitButton}>
            Get Started >
          </button>
        </div>
      </div>
    </>
  );
};

export default Sixthsection;
