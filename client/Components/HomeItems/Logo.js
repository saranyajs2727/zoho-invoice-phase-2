import React from "react";
import Image from "next/image";
import Zohologo from "../../public/Images/zoho-logo.png";
import Appbar from "./Appbar";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.main}>
        <div className={styles.image}>
          <Image src={Zohologo} alt="Logo" /> <h4> Invoice</h4>
        </div>
      </div>
      <div>
        <Appbar />
      </div>
    </div>
  );
}

export default Logo;
