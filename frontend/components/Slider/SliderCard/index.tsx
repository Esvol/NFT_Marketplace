'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./index.module.scss";
import images from "../../../img";
// import LikeProfile from "../../LikeProfile/LikeProfile";

type Props = {
    el: number,
    i: number,
}

const SliderCard = ({el, i}: Props) => {
  return (
    <motion.div className={styles.sliderCard}>
      <div className={styles.sliderCard_box}>
        <motion.div className={styles.sliderCard_box_img}>
          <Image
            src={images.creatorbackground10}
            className={styles.sliderCard_box_img_img}
            alt="slider profile"
          />
        </motion.div>
        <div className={styles.sliderCard_box_title}>
          <p>NFT Video #1245</p>
          <div className={styles.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>1 0f 100</small>
          </div>
        </div>

        <div className={styles.sliderCard_box_price}>
          <div className={styles.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.000 ETH</p>
          </div>

          <div className={styles.sliderCard_box_price_time}>
            <small>Reaming time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;