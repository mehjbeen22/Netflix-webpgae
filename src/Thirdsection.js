import React from "react";
import styles from "./Thirds.module.css";
import boxshoot from "./image/boxshot.png";
import downloadIcon from "./image/dload-icon.webp";
const Thirdsection = () => {
  return (
    <>
      <div className={styles.mainCase}>
        <div className={styles.bgPhoneImg}>
          <div className={styles.miniContentCase}>
            <img src={boxshoot} id={styles.boxshoot} />

            <div style={{ width: "55%", height: "5rem", padding: "5px" }}>
              <h3 style={{ color: "white" }}>Stranger Things</h3>
              <p style={{ color: "blue", fontWeight: "bold" }}>
                Downloading...
              </p>
            </div>
            <img
              src={downloadIcon}
              style={{
                height: "3rem",
                borderRadius: "22px",
                backgroundColor: " #000000",
              }}
            />
          </div>
        </div>

        <div className={styles.contentHolder}>
          <div className={styles.insideCnt}>
            <h1 style={{ color: "white", fontSize: "3rem" }}>
              Download your shows to watch offline
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "1.6rem",
                marginBlock: "1rem",
              }}
            >
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdsection;
