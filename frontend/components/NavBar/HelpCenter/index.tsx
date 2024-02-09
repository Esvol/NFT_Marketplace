import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

export const helpCenter = [
  {
    name: "About",
    link: 'about'
  },
  {
    name: "Contact us",
    link: 'contact-us'
  },
  {
    name: "Sign Up",
    link: 'sign-up'
  },
  {
    name: "Sign In",
    link: 'sign-in'
  },
  {
    name: "Subscription",
    link: 'subscription'
  }
]

const HelpCenter = () => {
  return (
    <div className={styles.box}>
      {
        helpCenter.map((element, index) => (
          <div key={element.name} className={styles.helpCenter}>
            <Link href={{pathname: `${element.link}`}}>{element.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter