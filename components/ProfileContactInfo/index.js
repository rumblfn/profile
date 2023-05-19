import styles from "./index.module.scss";
import stylesletters from '../../styles/AnimatedLetters.module.scss'
import Image from "next/image";
import {useEffect, useRef} from "react";

export const ContactMe = ({transformString, setPosContactMe}) => {
  const ref = useRef()

  useEffect(() => {
    setPosContactMe({
      x: ref.current.offsetLeft + ref.current.clientWidth / 2,
      y: ref.current.offsetTop + ref.current.clientHeight / 2
    })
  }, [ref.current])

  return <div ref={ref} className={styles['left-bottom-box']}>
    <div className={styles['box-with-animation']} style={{transform: transformString, fontSize: 30}}>
      <p className={stylesletters.title}>Contact Me</p>
      <div className={styles['about-item']}>
        <Image alt="profile" objectFit="cover" src='/discord.png' width={60} height={60}/>
        <p className={styles.text}>sham#4275</p>
      </div>
      <div className={styles['about-item']}>
        <Image alt="profile" objectFit="cover" src='/github.png' width={60} height={60}/>
        <a href='https://github.com/rumblfn' target='_blank' rel="noreferrer">
          <p className={styles.text}>GitHub/rumblfn</p>
        </a>
      </div>
      <div className={styles['about-item']}>
        <Image alt="profile" objectFit="cover" src='/tg.png' width={60} height={60}/>
        <a href='https://t.me/ssharum' target='_blank' rel="noreferrer">
          <p className={styles.text}>ssharum</p>
        </a>
      </div>
    </div>
  </div>
}