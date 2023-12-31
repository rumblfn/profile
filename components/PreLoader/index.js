import styles from './index.module.scss';
import {useEffect, useState} from "react";
import {AnimatedLetters} from "../AnimatedLetters";

export const PreLoader = () => {
  const [pageLoading, setPageLoading] = useState(true)
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArrayPageLoading = 'Loading ...'.split('')

  useEffect(() => {
    if (document.readyState !== "complete") {
      window.addEventListener('load', () => setPageLoading(false))

      return () => {
        window.removeEventListener('load', () => setPageLoading(false))
      }
    } else {
      setPageLoading(false)
    }
  }, [])

  if (!pageLoading) return null

  return <div className={styles.main}>
    <div className={styles.loader}>
      <AnimatedLetters
        letterClass={letterClass}
        strArray={strArrayPageLoading}
        idx={1}
      />
    </div>
  </div>
}