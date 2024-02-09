import React from "react";
import styles from "./index.module.scss";

type Props = {
    heading: string,
    paragraph: string
}

const Title = ({ heading, paragraph }: Props) => {
  return (
    <div className={styles.title}>
      <div className={styles.title_box}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;