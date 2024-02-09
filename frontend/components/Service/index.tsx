import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";
import images from "../../img";

const Service = () => {
  return (
    <div className={styles.service}>
      <div className={styles.service_box}>
        <div className={styles.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={styles.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={styles.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={styles.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={styles.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={styles.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={styles.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={styles.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;