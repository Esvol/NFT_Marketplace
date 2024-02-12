"use client"

import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

import styles from "./index.module.scss";

type Props = {
    setCollectiables: React.Dispatch<React.SetStateAction<boolean>>,
    setCreated: React.Dispatch<React.SetStateAction<boolean>>,
    setLike: React.Dispatch<React.SetStateAction<boolean>>,
    setFollower: React.Dispatch<React.SetStateAction<boolean>>,
    setFollowing: React.Dispatch<React.SetStateAction<boolean>>,
}

type Tabs = {
    [key: string]: {
        collectiables: boolean,
        created: boolean,
        follower: boolean,
        following: boolean,
        like: boolean,
        activeBtn: number,
    }
}

const tabs: Tabs = {
    "Collectiables": { collectiables: true, created: false, follower: false, following: false, like: false, activeBtn: 1 },
    "Created": { collectiables: false, created: true, follower: false, following: false, like: false, activeBtn: 2 },
    "Liked": { collectiables: false, created: false, follower: false, following: false, like: true, activeBtn: 3 },
    "Following": { collectiables: false, created: false, follower: false, following: true, like: false, activeBtn: 4 },
    "Followers": { collectiables: false, created: false, follower: true, following: false, like: false, activeBtn: 5 }
};

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}: Props) => {

  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLElement;
    const btnText = btn.innerText;

    console.log(btnText);
    const tabInfo = tabs[btnText];
    if (tabInfo) {
        const { collectiables, created, follower, following, like, activeBtn } = tabInfo;
        setCollectiables(collectiables);
        setCreated(created);
        setFollower(follower);
        setFollowing(following);
        setLike(like);
        setActiveBtn(activeBtn);
    }
  };

  return (
    <div className={styles.authorTaps}>
      <div className={styles.authorTaps_box}>
        <div className={styles.authorTaps_box_left}>
          <div className={styles.authorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Collectiables
            </button>
            <button
              className={`${activeBtn == 2 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Created
            </button>
            <button
              className={`${activeBtn == 3 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Liked
            </button>
            <button
              className={`${activeBtn == 4 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Following
            </button>
            <button
              className={`${activeBtn == 5 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Followers
            </button>
          </div>
        </div>

        <div className={styles.authorTaps_box_right}>
          <div
            className={styles.authorTaps_box_right_para}
            onClick={() => setOpenList(!openList)}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={styles.authorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedMenu(el)}
                  className={styles.authorTaps_box_right_list_item}
                >
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;