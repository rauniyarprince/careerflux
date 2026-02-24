import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>MyApp</h2>

      <nav>
        <ul style={styles.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#0f172a",
    color: "white"
  },
  logo: {
    margin: 0
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0
  }
};

export default Header;