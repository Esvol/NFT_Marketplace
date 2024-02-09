import React from 'react'
import Image from 'next/image';
import styles from './index.module.scss';
import images from '../../img'

import { Discover, HelpCenter } from '../NavBar';

import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { RiSendPlaneFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.footer_box_social}>
          <Image src={images.logo} alt='footer logo' height={100} width={100}/>
          <p>
            The world`s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, see, and discover exclusive digital items.
          </p>

          <div className={styles.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={styles.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={styles.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        
        <div className={styles.subscribe}>
          <h3>Subscribe</h3>

          <div className={styles.subscribe_box}>
            <input type="email" placeholder='Enter your email *' />
            <RiSendPlaneFill className={styles.subscribe_box_send} />
          </div>
          <div className={styles.subscribe_box_info}>
            <p>Discover, collect, and sell extraordinary NFTs OpenSea is the world first and largest NFT marketplace</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;