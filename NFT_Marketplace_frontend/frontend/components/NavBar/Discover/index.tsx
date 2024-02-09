import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

export const discover = [
  {
    name: "Collection",
    link: "collection"
  },
  {
    name: "Search",
    link: "search"
  },
  {
    name: "Author Profile",
    link: "author-profile"
  },
  {
    name: "NFT Details",
    link: "NFT-details"
  },
  {
    name: "Account Setting",
    link: "account-setting"
  },
  {
    name: "Connect Wallet",
    link: "connect-wallet"
  },
  {
    name: "Blog",
    link: "blog"
  },
]

const Discover = () => {
  
  return (
    <div>
      {
        discover.map((element, index) => (
          <div key={element.name} className={styles.discover}>
            <Link href={{pathname: `${element.link}`}}>{element.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Discover