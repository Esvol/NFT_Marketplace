'use client'

import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

import styles from "./index.module.scss";
import DaysComponent from "./DaysComponents";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5, 6];

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
    <div className={styles.collection}>
        
      <div className={styles.collection_title}>
        <h2>Top List Creators</h2>
        <div className={styles.collection_collections}>
          <div className={styles.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>

        {popular && (
            <div className={styles.collection_box}>
            {CardArray.map((el, i) => (
                <DaysComponent key={i + 1} />
            ))}
            </div>
        )}

        {following && (
            <div className={styles.collection_box}>
            {followingArray.map((el, i) => (
                <DaysComponent key={i + 1} />
            ))}
            </div>
        )}

        {news && (
            <div className={styles.collection_box}>
            {newsArray.map((el, i) => (
                <DaysComponent key={i + 1} />
            ))}
            </div>
        )}
    </div>
  );
};

export default Collection;