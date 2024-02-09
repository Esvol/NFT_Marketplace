'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Navbar.module.scss'

import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

import { Discover, HelpCenter, Notification, Profile, SideBar } from '.'
import Button from '../Button'
import images from '../../img'

interface ButtonStateMap {
    [key: string]: {
      discover: boolean;
      help: boolean;
    };
}

const buttonStateMap: ButtonStateMap = {
    "Discover": {discover: true, help: false},
    "Help": {discover: false, help: true},
    "Notification": {discover: false, help: false},
    "Profile": {discover: false, help: false},
}

const NavBar = () => {
    
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    const openLogic = (btnText: string) => {        
        if(btnText !== "SideBar"){
            setDiscover(buttonStateMap[btnText].discover);
            setHelp(buttonStateMap[btnText].help);

            if(!notification && btnText === "Notification"){
                setNotification(true);
            }else{
                setNotification(false);
            }

            if(!profile && btnText === "Profile"){
                setProfile(true);
            }else{
                setProfile(false);
            }
        } 
        else {
            setSideBar(!sideBar);
        }
    }

  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_container}>

            <div className={styles.navbar_container_left}>
                <div className={styles.logo}>
                    <Image src={images.logo} alt='NFT MARKET PLACE' width={100} height={100}/>
                </div>
                <div className={styles.navbar_container_left_box_input}>
                    <div className={styles.navbar_container_left_box_input_box}>
                        <input type='text' placeholder='Search NFT'/>
                        <BsSearch onClick={() => {}} className={styles.search_icon}/>
                    </div>
                </div>
            </div>


            <div className={styles.navbar_container_right}>
                <div className={styles.navbar_container_right_discover}>
                    <p onClick={(e) => openLogic("Discover")}>Discover</p>
                    {discover && (
                        <div className={styles.navbar_container_right_discover_box}>
                            <Discover />
                        </div>
                    )}
                </div>

                <div className={styles.navbar_container_right_help}>
                    <p onClick={(e) => openLogic("Help")}>Help Center</p>
                    {help && (
                        <div className={styles.navbar_container_right_help_box}>
                            <HelpCenter />
                        </div>
                    )}
                </div>

                <div className={styles.navbar_container_right_notify}>
                    <MdNotifications className={styles.nofity} onClick={() => openLogic("Notification")}/>
                    {notification && <Notification />}
                </div>

                <div className={styles.navbar_container_right_button}>
                    <Button btnName={"Create"} handleClick={() => {}}/>
                </div>

                <div className={styles.navbar_container_right_profile_box}>
                    <div className={styles.navbar_container_right_profile}>
                        <Image src={images.user1} alt='Profile' width={40} height={40} onClick={() => openLogic('Profile')} className={styles.navbar_container_right_profile}/>
                    
                        {profile && <Profile />}
                    </div>
                </div>

                {/* FOR MOBILE  */}
                <div className={styles.navbar_container_right_menuBtn}>
                    <CgMenuRight className={styles.menuIcon} onClick={() => openLogic("SideBar")}/>
                </div>
            </div>

        </div>

        {/* FOR MOBILE  */}
        {
            sideBar && (
                <div className={styles.SideBar}>
                    <SideBar setSideBar={setSideBar} />
                </div>
            )
        }
    </div>
  )
}

export default NavBar