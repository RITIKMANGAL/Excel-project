import React from "react";
import styles from "./Home.module.css";  // Import the CSS module

const Home = () => {
  return (
    <div className={styles.homeContainer}> {/* Use the module class */}
      Home Page
    </div>
  );
};

export default Home;
