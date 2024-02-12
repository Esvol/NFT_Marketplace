'use client'

import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

import images from '../../img'
import styles from "./index.module.scss";
import FollowerTabCard from "./FollowerTabCard";

const CardArray = [
  {
    id: 1,
    avatar: images.user1,
    img: images.creatorbackground1
  },
  {
    id: 2,
    avatar: images.user2,
    img: images.creatorbackground2
  },
  {
    id: 3,
    avatar: images.user3,
    img: images.creatorbackground3
  },
  {
    id: 4,
    avatar: images.user4,
    img: images.creatorbackground4
  },
  {
    id: 5,
    avatar: images.user5,
    img: images.creatorbackground5
  },
  {
    id: 6,
    avatar: images.user6,
    img: images.creatorbackground6
  },
  {
    id: 7,
    avatar: images.user7,
    img: images.creatorbackground8
  },
  {
    id: 8,
    avatar: images.user8,
    img: images.creatorbackground9
  }
];

const FollowingArray = [
  {
    id: 1,
    avatar: images.user9,
    img: images.creatorbackground9
  },
  {
    id: 2,
    avatar: images.user1,
    img: images.creatorbackground1
  },
  {
    id: 3,
    avatar: images.user2,
    img: images.creatorbackground2
  },
  {
    id: 4,
    avatar: images.user3,
    img: images.creatorbackground3
  },
  {
    id: 5,
    avatar: images.user5,
    img: images.creatorbackground5
  },
  {
    id: 6,
    avatar: images.user4,
    img: images.creatorbackground4
  }
];

const NewsArray = [
  {
    id: 1,
    avatar: images.user7,
    img: images.creatorbackground7
  },
  {
    id: 2,
    avatar: images.user4,
    img: images.creatorbackground4
  },
  {
    id: 3,
    avatar: images.user5,
    img: images.creatorbackground5
  },
  {
    id: 4,
    avatar: images.user2,
    img: images.creatorbackground2,
  },
  {
    id: 5,
    avatar: images.user10,
    img: images.creatorbackground10
  }
];

const FollowerTab = () => {
  

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={styles.followerTab}>
      <div className={styles.followerTab_title}>
        <h2> Top Creators List..</h2>
        <div className={styles.followerTab_tabs}>
          <div className={styles.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={styles.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={styles.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={styles.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={styles.followerTab_member}>
        <div className={styles.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;