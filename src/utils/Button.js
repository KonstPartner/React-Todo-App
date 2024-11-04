import React from 'react'
import styles from './Button.module.css'

const Button = ({ title, children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={styles.btn}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
