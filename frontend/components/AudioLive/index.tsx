import React from "react";
import styles from "./index.module.scss";

import AudioCard from "./AudioCard";
import AudioCardSmall from "./AudioCardSmall";

const AudioLive = () => {
  return (
    <div className={styles.audioLive}>
      <div className={styles.audioLive_box}>
        <div className={styles.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>
        <div className={styles.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};

export default AudioLive;