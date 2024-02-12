'use client'

import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

import styles from "./index.module.scss";
import images from "../../../img";
import LikeProfile from "../../LikeProfile";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    <div className={styles.audioPlayer}>
      <div className={styles.audioPlayer_box}>
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={styles.audioPlayer_box_img}
        />

        <div className={styles.audioPlayer_box_info}>
          <h4>NFT music #1142</h4>
          <div className={styles.audioPlayer_box_info_box}>
            <LikeProfile />
            <div className={styles.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className={styles.audioPlayer_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;