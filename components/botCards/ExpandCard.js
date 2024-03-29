import {motion} from 'framer-motion'
import React from "react";
import styles from './expand.module.css'

export const ExpandCard = ({selectedIdx, item}) => {
  return <motion.div className={styles.expand} layoutId={selectedIdx} onClick={e => e.stopPropagation()}>
    <motion.h5>{item.price}</motion.h5>
    <motion.h2>{item.name}</motion.h2>
    <motion.div className={styles.body}>
      {item.options.map((option, idx) =>
        <motion.ul key={idx} style={{marginLeft: 8}}>
          <motion.li>
            {option}
          </motion.li>
        </motion.ul>
      )}
    </motion.div>
  </motion.div>
}