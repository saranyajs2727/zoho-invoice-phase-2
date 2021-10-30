import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faChartArea,
  faCodeBranch,
  faDatabase,
  faDollarSign,
  faFileInvoice,
  faMale,
  faMeteor,
  faPersonBooth,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav((c) => !c);
  };
  return (
    <div className={styles.container}>
      <div
        className={
          nav ? styles.sidebar : `${styles.sidebar} ${styles.unactive}`
        }
      >
        <ul>
          <li>
            <Link href="/home/dashboard">
              <a>
                <FontAwesomeIcon className={styles.icon} icon={faDatabase} />
                DashBoard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home/customers">
              <a>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                Customers
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home/items">
              <a>
                <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
                Items{" "}
              </a>
            </Link>
          </li>
          <br />
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faChartArea} />
              Estimates
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faTruck} />
              Delivary challans
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faFileInvoice} />
              Invoices
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faDollarSign} />
              Payments Recieved
            </a>
          </li>
          <br />
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faDollarSign} />
              Expenses
            </a>
          </li>
          <br />
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
              Timesheet
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faCodeBranch} />
              Reports
            </a>
          </li>
          <li className={styles.icon1}>
            <a onClick={() => handleNav()}>&rsaquo;</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
