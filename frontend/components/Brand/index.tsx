"use client"

import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";
import images from "../../img";
import Button from "../Button";

const Brand = () => {
  return (
    <div className={styles.brand}>
      <div className={styles.brand_box}>
        <div className={styles.brand_box_left}>
          <Image src={images.logo} alt="brand logo"/>
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={styles.brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className={styles.brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;