import React from "react";
import styles from '../../styles/home.module.scss'
import HeroSection from "../../components/HeroSection";
import Service from "../../components/Service";
import NFTSlider from "../../components/NFTSlider";
import Subscribe from "../../components/Subscribe";
import Title from "../../components/Title";
import Category from "../../components/Category";
import Filter from "../../components/Filter";

const Home: React.FC = () =>  {
  return (
      <div className={styles.homePage}>
        <HeroSection />
        <Service />
        <NFTSlider />
        <Subscribe />
        <Title
          heading="Featured NFTs"
          paragraph="Discover the most outstanding NFTs in all topics of life."
        />
        <Filter />
        <Title
          heading="Browse by category"
          paragraph="Explore the NFTs in the most featured categories."
        />
        <Category />
      </div>
  );
}

export default Home;