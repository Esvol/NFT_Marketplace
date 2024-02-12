import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import styles from "./index.module.scss";
import Button from "../../components/Button";

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form_box}>
        <form>
          <div className={styles.form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Oleksandr Voloshyn"
              className={styles.form_box_input_userName}
            />
          </div>

          <div className={styles.form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={styles.form_box_input_box}>
              <div className={styles.form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Email*" />
            </div>
          </div>

          <div className={styles.form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              placeholder="something about yourself in few words"
            ></textarea>
          </div>

          <div className={styles.form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={styles.form_box_input_box}>
              <div className={styles.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>

              <input type="text" placeholder="website" />
            </div>
          </div>

          <div className={styles.form_box_input_social}>
            <div className={styles.form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={styles.form_box_input_box}>
                <div className={styles.form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://shoaib" />
              </div>
            </div>
            <div className={styles.form_box_input}>
              <label htmlFor="Twitter">Twitter</label>
              <div className={styles.form_box_input_box}>
                <div className={styles.form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://shoaib" />
              </div>
            </div>
            <div className={styles.form_box_input}>
              <label htmlFor="Instragram">Instragram</label>
              <div className={styles.form_box_input_box}>
                <div className={styles.form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://shoaib" />
              </div>
            </div>
          </div>

          <div className={styles.form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={styles.form_box_input_box}>
              <div className={styles.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
              />
              <div className={styles.form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={styles.form_box_btn}>
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classstyles={styles.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;