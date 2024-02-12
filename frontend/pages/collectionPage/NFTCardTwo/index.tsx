"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

import styles from "./index.module.scss";
import LikeProfile from "../../../components/LikeProfile";
type Props = {
    NFTData: StaticImageData[]
}

const NFTCardTwo = ({ NFTData }:Props) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div className={styles.NFTCardTwo}>
      {NFTData.map((el, i) => (
        <div className={styles.NFTCardTwo_box} key={i + 1}>
          <div className={styles.NFTCardTwo_box_like}>
            <div className={styles.NFTCardTwo_box_like_box}>
              <div className={styles.NFTCardTwo_box_like_box_box}>
                <BsImage className={styles.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  {""}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.NFTCardTwo_box_img}>
            <Image
              src={el}
              alt="NFT"
              className={styles.NFTCardTwo_box_img_img}
            />
          </div>

          <div className={styles.NFTCardTwo_box_info}>
            <div className={styles.NFTCardTwo_box_info_left}>
              <LikeProfile />
              <p>Clone #{i + 1}</p>
            </div>
            <small>4{i + 2}</small>
          </div>

          <div className={styles.NFTCardTwo_box_price}>
            <div className={styles.NFTCardTwo_box_price_box}>
              <small>Current Bid</small>
              <p>1{i + 5}.000 ETH</p>
            </div>
            <p className={styles.NFTCardTwo_box_price_stock}>
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;