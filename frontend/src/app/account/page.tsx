"use client"

import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { DropzoneInputProps, DropzoneRootProps, useDropzone } from "react-dropzone";

import styles from "./index.module.scss";
import images from "../../../img";
import Form from "../../../pages/accountPage";

const Account = () => {
  const [fileUrl, setFileUrl] = useState<File>();

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps }: { getRootProps: () => DropzoneRootProps, getInputProps: () => DropzoneInputProps } = useDropzone({
    onDrop,
    accept: {'image/*': []},
    maxSize: 5000000,
});

  return (
    <div className={styles.account}>
      <div className={styles.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={styles.account_box}>
        <div className={styles.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="account upload"
            className={styles.account_box_img_img}
          />
          <p className={styles.account_box_img_para}>Change Image</p>
        </div>
        <div className={styles.account_box_from}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;