'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

import { discover } from '../Discover'
import { helpCenter } from '../HelpCenter'

import { GrClose } from 'react-icons/gr'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import images from '../../../img'
import Button from '../../Button'


type Props = {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>,
}

const SideBar = ({setSideBar}: Props) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  
  return (
    <div className={styles.sideBar}>
      <GrClose className={styles.sideBar_closeBtn} onClick={() => setSideBar(false)} />
      <div className={styles.sideBar_box}>
        <Image src={images.logo} alt='logo' width={150} height={150} />
        <p className={styles.sideBar_box_p}>Discover the most outstanding articles on all the topics of NFT and share them!</p>
        <div className={styles.sideBar_social}>
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

      <div className={styles.sideBar_menu}>
        <div>
          <div className={styles.sideBar_menu_box} onClick={() => setOpenDiscover(!openDiscover)}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {
            openDiscover && (
              <div className={styles.sideBar_discover}>
                {discover.map((element, index) => (
                  <p key={element.name}>
                    <Link href={{pathname: `${element.link}`}}>{element.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>

        <div>
          <div className={styles.sideBar_menu_box} onClick={() => setOpenHelp(!openHelp)}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {
            openHelp && (
              <div className={styles.sideBar_helpCenter}>
                {helpCenter.map((element, index) => (
                  <p key={element.name}>
                    <Link href={{pathname: `${element.link}`}}>{element.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>

      </div>

      <div className={styles.sideBar_button}>
          <Button btnName={"Create"} handleClick={() => {}}/>
          <Button btnName={"Connect Wallet"} handleClick={() => {}}/>
      </div>
    </div>
  )
}

export default SideBar