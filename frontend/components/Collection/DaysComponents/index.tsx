import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import styles from "./index.module.scss";
import images from "../../../img";

const DaysComponents = () => {
  return (
    <div className={styles.daysComponent}>
      <div className={styles.daysComponent_box}>
        <div className={styles.daysComponent_box_img}>
          <Image
            src={images.creatorbackground1}
            className={styles.daysComponent_box_img_img}
            alt="profile background"
          />
        </div>

        <div className={styles.daysComponent_box_profile}>
          <Image
            src={images.creatorbackground2}
            alt="profile"
            className={styles.daysComponent_box_img_1}
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            className={styles.daysComponent_box_img_2}
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            className={styles.daysComponent_box_img_3}
          />
        </div>

        <div className={styles.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={styles.daysComponent_box_title_info}>
            <div className={styles.daysComponent_box_title_info_profile}>
              <Image
                src={images.user1}
                alt="profile"
                width={30}
                height={30}
                objectFit="covers"
                className={styles.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Shoaib Bhai
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={styles.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;