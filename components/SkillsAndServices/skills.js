import styles from './style.module.scss'
import {useContext, useState} from "react";
import {CursorImageContext} from "../../pages/_app";

export const Skills = () => {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)
  const [fourth, setFourth] = useState(0)

  const {setImage} = useContext(CursorImageContext)

  setTimeout(() => {
    setFirst(1)
  }, 100)

  setTimeout(() => {
    setSecond(1)
  }, 200)

  setTimeout(() => {
    setThird(1)
  }, 300)

  setTimeout(() => {
    setFourth(1)
  }, 400)

  return <div className={styles.main}>
    <div className={`${styles.item} ${styles._1}`} style={{left: first && 0}}>
      <p className={styles['sub-title']}>Frontend</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/nextjs.png')} onMouseLeave={() => setImage('')}>Next/</span>
        <span onMouseOver={() => setImage('/react.svg.png')} onMouseLeave={() => setImage('')}>React/</span>
        <span onMouseOver={() => setImage('/redux.png')} onMouseLeave={() => setImage('')}>Redux </span>
        <span onMouseOver={() => setImage('/TS.svg.png')} onMouseLeave={() => setImage('')}>TS/</span>
        <span onMouseOver={() => setImage('/JS.png')} onMouseLeave={() => setImage('')}>JS</span>
      </p>
    </div>
    <div className={`${styles.item} ${styles._2}`} style={{marginTop: 12, left: second && 0}}>
      <p className={styles['sub-title']}>Backend</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/express.png')} onMouseLeave={() => setImage('')}>Express </span>
        <span onMouseOver={() => setImage('/redis.png')} onMouseLeave={() => setImage('')}>Redis </span>
        <span onMouseOver={() => setImage('/pg.svg.png')} onMouseLeave={() => setImage('')}>PostgreSQL</span>
      </p>
    </div>
    <div className={`${styles.item} ${styles._3}`} style={{marginTop: 12, left: third && 0}}>
      <p className={styles['sub-title']}>Discord Bots</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/ds.png')} onMouseLeave={() => setImage('')}>discord.js</span>
      </p>
    </div>
    <div className={`${styles.item} ${styles._4}`} style={{marginTop: 12, left: fourth && 0}}>
      <p className={styles['sub-title']}>Other</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/py.png')} onMouseLeave={() => setImage('')}>Python </span>
        (<span onMouseOver={() => setImage('/flask.png')} onMouseLeave={() => setImage('')}>Flask </span>
        <span onMouseOver={() => setImage('/qt.svg.png')} onMouseLeave={() => setImage('')}>PyQt5 </span>
        <span onMouseOver={() => setImage('/pygame.png')} onMouseLeave={() => setImage('')}>Pygame</span>)
        <span onMouseOver={() => setImage('/php.png')} onMouseLeave={() => setImage('')}> PHP</span>
      </p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/sockets.png')} onMouseLeave={() => setImage('')}>Sockets </span>
        <span onMouseOver={() => setImage('/mysql.png')} onMouseLeave={() => setImage('')}>MySQL</span>
      </p>
    </div>
  </div>
}