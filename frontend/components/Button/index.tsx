import React from 'react'
import styles from './index.module.scss'

type Props = {
  btnText?: string;
  btnName?: string;
  handleClick?: () => void;
}

const Button = ({btnText, btnName, handleClick}: Props) => {
  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={handleClick}>
        {btnName}
      </button>
    </div>
  )
}

export default Button