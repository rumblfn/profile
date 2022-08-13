import styles from './style.module.scss'
import {useState} from "react";

export const Services = () => {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)

  setTimeout(() => {
    setFirst(1)
  }, 100)

  setTimeout(() => {
    setSecond(1)
  }, 200)

  setTimeout(() => {
    setThird(1)
  }, 300)

  return <div className={styles.main}>
    <div className={`${styles.item} ${styles._1}`} style={{left: first && 0}}>
      <p className={styles['sub-title']}>Website development</p>
    </div>
    <div className={`${styles.item} ${styles._2}`} style={{left: second && 0}}>
      <div className={styles.desc}>
        <div style={{marginTop: 6}}>
          <span>Landing pages</span>
        </div>
        <div style={{marginTop: 6}}>
          <span>Online stores </span>
        </div>
        <div style={{marginTop: 6}}>
          <span>Messengers</span>
        </div>
        <div style={{marginTop: 6}}>
          <span>Blogs</span>
        </div>
        <div style={{marginTop: 6}}>
          <span>Forums</span>
        </div>
        <div style={{marginTop: 6}}>
          <span>Personal project</span>
        </div>
      </div>
    </div>
    <div className={`${styles.item} ${styles._3}`} style={{marginTop: 12, left: third && 0}}>
      <p className={styles['sub-title']}>Discord bots</p>
      <p className={styles.desc}>All in one</p>
    </div>
  </div>
}