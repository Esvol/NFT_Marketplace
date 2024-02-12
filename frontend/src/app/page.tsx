import React from "react";
import styles from '../../styles/home.module.scss'

import HeroSection from "../../components/HeroSection";
import Service from "../../components/Service";
import NFTSlider from "../../components/NFTSlider";
import Subscribe from "../../components/Subscribe";
import Title from "../../components/Title";
import Category from "../../components/Category";
import Filter from "../../components/Filter";
import NFTCard from "../../components/NFTCard";
import Collection from "../../components/Collection";
import AudioLive from "../../components/AudioLive";
import FollowerTab from "../../components/FollowerTab";
import Slider from "../../components/Slider";
import Brand from "../../components/Brand";
import Video from "../../components/Video";

const Home: React.FC = () =>  {
  return (
      <div className={styles.homePage}>
        <HeroSection />
        <Service />
        <NFTSlider />

        <Title
          heading="Audio Collection"
          paragraph="Discover the most outstanding NFTs in all topics of life."
        />
        <AudioLive />

        <Title
          heading="New Collection"
          paragraph="Discover the most outstanding NFTs in all topics of life."
        />

        <FollowerTab />
        <Slider />
        <Collection />
        
        <Title
          heading="Featured NFTs"
          paragraph="Discover the most outstanding NFTs in all topics of life."
        />
        <Filter />

        <NFTCard />
        
        <Title
          heading="Browse by category"
          paragraph="Explore the NFTs in the most featured categories."
        />
        <Category />

        <Subscribe />
        <Brand />
        <Video />
      </div>
  );
}

export default Home;