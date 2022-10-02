import styles from "./index.module.scss";
import stylesletters from '../../styles/AnimatedLetters.module.scss'
import Image from "next/image";

export const ContactMe = ({transformString}) => {
  return <div className={styles['left-bottom-box']}>
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
      {/*<div className={styles['about-item']}>*/}
      {/*  <Image alt="profile" objectFit="cover" src='/gmail.png' width={60} height={60}/>*/}
      {/*  <a href='mailto:toshamilgis@gmail.com' target='_blank' rel="noreferrer">*/}
      {/*    <p className={styles.text}>Gmail/toshamilgis</p>*/}
      {/*  </a>*/}
      {/*</div>*/}
      <div className={styles['about-item']}>
        <Image alt="profile" objectFit="cover" src='/tg.png' width={60} height={60}/>
        <a href='https://t.me/rumblfn' target='_blank' rel="noreferrer">
          <p className={styles.text}>rumblfn</p>
        </a>
      </div>
    </div>
  </div>
}