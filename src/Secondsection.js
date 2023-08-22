import React from "react";
import styles from "./Secondsection.module.css";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import introVedio from "./videos/video-tv-1.mp4";

const Secondsection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Content}>
          <h1 style={{ color: "white", fontSize: "3rem" }}>Enjoy on your TV</h1>
          <p
            style={{ color: "white", fontSize: "1.6rem", marginBlock: "1rem" }}
          >
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className={styles.videoBgImage}>
          <Video autoPlay loop className={styles.video}>
            <source
              src={introVedio}
              type="video/webm"
              
            />
          </Video>
        </div>
      </div>
    </>
  );
};

export default Secondsection;
