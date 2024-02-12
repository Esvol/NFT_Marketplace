'use client'

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import styles from "./index.module.scss";
import images from "../../../img";

type Props = {
    i: number,
    el: {
      id: number,
      avatar: StaticImageData,
      img: StaticImageData,
    }
}

const FollowerTabCard = ({ i, el }: Props) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  return (
    <div className={styles.FollowerTabCard}>
      <div className={styles.FollowerTabCard_rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className={styles.FollowerTabCard_box}>
        <div className={styles.FollowerTabCard_box_img}>
          <Image
            className={styles.FollowerTabCard_box_img_img}
            src={el.img}
            alt="profile background"
            objectFit="cover"
          />
        </div>

        <div className={styles.FollowerTabCard_box_profile}>
          <Image
            className={styles.FollowerTabCard_box_profile_img}
            alt="profile picture"
            src={el.avatar}
          />
        </div>

        <div className={styles.FollowerTabCard_box_info}>
          <div className={styles.FollowerTabCard_box_info_name}>
            <h4>
              Giada Mann{""}{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>12.321 ETH</p>
          </div>

          <div className={styles.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()}>
                Follow{""}{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a onClick={() => followMe()}>Following</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;