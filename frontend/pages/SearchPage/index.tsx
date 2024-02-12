import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

import styles from "./index.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar_box}>
        <BsSearch className={styles.searchBar_box_icon} />
        <input type="text" placeholder="Type yout keyword..." />
        <BsArrowRight className={styles.searchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
