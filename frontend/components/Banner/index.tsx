import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./index.module.scss";

type Props = {
    bannerImage: StaticImageData,
}

const Banner = ({ bannerImage }: Props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_img}>
        <Image
          src={bannerImage}
          alt="background"
          className={styles.banner_img_img}
        />
      </div>

      <div className={styles.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="background"
          className={styles.banner_img_mobile_img}
        />
      </div>
    </div>
  );
};

export default Banner;