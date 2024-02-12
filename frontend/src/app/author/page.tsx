"use client"

import React, { useState, useEffect } from "react";

import styles from "./page.module.scss";
import images from "../../../img";

import Banner from "../../../components/Banner";
import Brand from "../../../components/Brand";
import Title from "../../../components/Title";
import FollowerTabCard from "../../../components/FollowerTab/FollowerTabCard";
import AuthorTaps from "../../../pages/authorPage/AuthorTaps";
import AuthorProfileCard from "../../../pages/authorPage/AuthorProfileCard";
import AuthorNFTCardBox from "../../../pages/authorPage/AuthorNFTCardBox";


const author = () => {
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

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={styles.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />
      <div className={styles.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>

      <Brand />
    </div>
  );
};

export default author;
