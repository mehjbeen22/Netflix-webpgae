import React from "react";
import styles from "./Fifthsec.module.css";
import image4 from "./image/img-4.png";
const FIfthsection = () => {
  return (
    <>
      <div className={styles.mainHolder}>
        <img src={image4} className={styles.Picture} />

        <div className={styles.contentCase}>
          <h1 style={{ color: "white", fontSize: "3rem" }}>
            Create profiles for kids
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "1.6rem",
              marginBlock: "1rem",
            }}
          >
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </>
  );
};

export default FIfthsection;
