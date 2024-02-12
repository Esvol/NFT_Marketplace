import React from "react";

import styles from "./page.module.scss";
import images from "../../../img";
import Banner from "../../../components/Banner";
import NFTCardTwo from "../../../pages/collectionPage/NFTCardTwo";
import CollectionProfile from "../../../pages/collectionPage/collectionProfile";

import Slider from "../../../components/Slider";
import Brand from "../../../components/Brand";
import Filter from "../../../components/Filter";

const Collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={styles.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default Collection;