import React from "react";
import styles from "./Home.module.css";
import netfilxLogo from "./image/Netflix-logo.svg";
import worldLogo from "./image/gollogo.png";

const Home = () => {
  return (
    <>
      <navbar className={styles.netflixNavbar}>
        <header className={styles.header}>
          <img src={netfilxLogo} id={styles.netflixLogo} />
          <div className={styles.sidebar}>
            <div className={styles.selectBlock}>
              <img src={worldLogo} className={styles.wlogo} />
              <select id={styles.selectLang}>
                <option label="English">English</option>
                <option label="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <button id={styles.signIn}>Sign In</button>
          </div>
        </header>

        <div className={styles.mainContent}>
          <div className={styles.contentInside}>
            <h1 style={{ color: "white", fontSize: "3rem", display: "inline",marginTop:'30px' }}>
              Unlimited movies, TV shows and more
            </h1>
            <p
              style={{ color: "white", marginBlock: "20px", fontSize: "2rem" }}
            >
              Watch anywhere. Cancel anytime.
            </p>
            <p
              style={{ color: "white", marginBlock: "8px", fontSize: "1.6rem" }}
            >
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
        </div>
      </navbar>
    </>
  );
};

export default Home;
