import React from "react";
import styles from "./Forthsec.module.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import SecondVedio from "./videos/video-2.mp4";

const Forthsection = () => {
  return (
    <>
      <div className={styles.mainCantainer}>
        <div className={styles.childCase}>
          <h1
            style={{
              color: "white",
              fontSize: "3rem",
              paddingLeft: "2rem",
              marginTop: "3.5rem",
            }}
          >
            Watch everywhere
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              paddingLeft: "2rem",
              marginTop: "1.5rem",
            }}
          >
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <Video autoPlay loop className={styles.video2}>
          <source src={SecondVedio} type="video/webm" />
        </Video>
      </div>
    </>
  );
};

export default Forthsection;
