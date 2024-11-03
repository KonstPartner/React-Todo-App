import React from 'react'
import styles from './Button.module.css'

const Button = ({title, children, onClick}) => {
  return (
    <button onClick={onClick} title={title} className={styles.btn}>{children}</button>
  )
}

export default Button