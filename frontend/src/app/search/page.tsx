import React from "react";

import styles from "./index.module.scss";
import images from "../../../img";

import Slider from "../../../components/Slider";
import Brand from "../../../components/Brand";
import SearchBar from "../../../pages/SearchPage";
import Filter from "../../../components/Filter";
import NFTCardTwo from "../../../pages/collectionPage/NFTCardTwo";
import Banner from "../../../components/Banner";

const searchPage = () => {
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
    <div className={styles.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;