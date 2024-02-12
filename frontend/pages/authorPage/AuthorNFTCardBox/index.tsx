"use client"

import React, { useState } from "react";

import styles from "./index.module.scss";
import images from "../../../img";
import NFTCardTwo from "../../collectionPage/NFTCardTwo";
import FollowerTabCard from "../../../components/FollowerTab/FollowerTabCard";

type Props = {
    collectiables: boolean,
    created: boolean,
    like: boolean,
    follower: boolean,
    following: boolean,
}

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}: Props) => {

  const collectiablesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const createdArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  ];

  const likeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const followerArray = [
    {
        id: 1,
        img: images.creatorbackground1,
        avatar: images.user1,
    },
    {
        id: 2,
        img: images.creatorbackground2,
        avatar: images.user2,
    },
    {
        id: 3,
        img: images.creatorbackground3,
        avatar: images.user3,
    },
    {
        id: 4,
        img: images.creatorbackground4,
        avatar: images.user4,
    },
    {
        id: 5,
        img: images.creatorbackground5,
        avatar: images.user5,
    },
    {
        id: 6,
        img: images.creatorbackground6,
        avatar: images.user6,
    },
  ];

  const followingArray = [
    {
        id: 1,
        img: images.creatorbackground3,
        avatar: images.user3,
    },
    {
        id: 2,
        img: images.creatorbackground4,
        avatar: images.user4,
    },
    {
        id: 3,
        img: images.creatorbackground5,
        avatar: images.user5,
    },
    {
        id: 4,
        img: images.creatorbackground6,
        avatar: images.user6,
    },
    {
        id: 5,
        img: images.creatorbackground1,
        avatar: images.user1,
    },
  ];

  return (
    <div className={styles.authorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={styles.authorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={styles.authorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;