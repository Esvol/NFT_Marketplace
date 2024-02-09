import React from "react";
import Image from "next/image";

import { BsCircleFill } from "react-icons/bs";
import styles from "./index.module.scss";
import images from "../../img";

const Category = () => {
  const categoryArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.box_category}>
      <div className={styles.category}>
        {categoryArray.map((el, i) => (
          <div className={styles.category_box} key={i}>
            <Image
              src={images.creatorbackground1}
              className={styles.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={styles.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={styles.category_box_title_info}>
                <h4>Enterainment</h4>
                <small>1995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;