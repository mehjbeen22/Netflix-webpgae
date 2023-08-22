import React from "react";
import styles from "./Lastsec.module.css";
import worldLogo from "./image/gollogo.png";
import { colors } from "@mui/material";

const Lastsec = () => {
  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.childSection}>
          <p style={{ padding: "15px", fontWeight: "bold", color: "gray" }}>
            Questions? Call <u>000-800-919-1694</u>
          </p>

          <div className={styles.listCaseHolder}>
            <ul className={styles.listCase}>
              <li>FAQ</li>
              <li>Media Centre</li>
              <li>Ways to Watch</li>
              <li>Cookis Preferences</li>
              <li>Speed Test</li>

              <div className={styles.selectBlock}>
                <img src={worldLogo} className={styles.wlogo} />
                <select id={styles.selectLang}>
                  <option label="English">English</option>
                  <option label="हिन्दी">हिन्दी</option>
                </select>
              </div>

              <p style={{ textDecoration: "none" }}>Netflix India</p>
            </ul>

            <ul className={styles.listCase}>
              <li>Help Centre</li>
              <li>Investor Relations</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
              <li>Legal Notices</li>
            </ul>

            <ul className={styles.listCase}>
              <li>Account</li>
              <li>Jobs</li>
              <li>Privacy</li>
              <li>Contact Us</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lastsec;
