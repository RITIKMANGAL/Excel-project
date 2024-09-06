import React from "react";
import styles from "./Sidebar.module.css";  // Import the CSS module

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className={styles.sidebarContainer}> {/* Use the module class */}
      <div className={styles.sidebarHeader}>
        AMBIT <span className={styles.brandHighlight}>Finvest</span>
      </div>
      <div className={styles.navList}>
        <ul>
          <li
            onClick={() => handleOnClick("Home")}
            className={`${styles.navItem} ${
              selectedTab === "Home" ? styles.navItemActive : ""
            }`}
          >
            <a href="#" className={styles.navLink}>
              Home
            </a>
          </li>
          <li
            onClick={() => handleOnClick("Dashboard")}
            className={`${styles.navItem} ${
              selectedTab === "Dashboard" ? styles.navItemActive : ""
            }`}
          >
            <a href="#" className={styles.navLink}>
              Data
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
