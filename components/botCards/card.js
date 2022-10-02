import {motion} from 'framer-motion'
import React from "react";
import styles from './card.module.scss'

export const Card = ({item, onClick}) => {
  return <motion.div
    className={styles.card}
    layoutId={item.id} onClick={(e) => {
      e.stopPropagation()
      onClick(item.id)
    }}>
    <motion.h5>{item.price}</motion.h5>
    <motion.h2>{item.name}</motion.h2>
  </motion.div>
}