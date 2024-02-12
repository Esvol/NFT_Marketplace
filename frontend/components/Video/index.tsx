import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";
import images from "../../img";

const Video = () => {
  return (
    <div className={styles.video}>
      <div className={styles.video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more new
          perspectives on just about any topic. Everyone’s welcome.
        </p>

        <div className={styles.video_box_frame}>
            <Image
              src={images.nftVideo}
              alt="Video image"
              className={styles.video_box_frame_img}
            />
          </div>
      </div>
    </div>
  );
};

export default Video;