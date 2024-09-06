import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import styles from "./App.module.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className={styles.mainContent}>
        {selectedTab === "Dashboard" ? <Dashboard /> : <Home />}
      </div>
    </div>
  );
};

export default App;
