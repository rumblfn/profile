import {useEffect, useRef, useState} from "react";
import {PageBox} from "../styled/pages";
import {TextHuge, TextHugeStyling} from "../styled/text";
import {AnimatedLetters} from "../components/AnimatedLetters";
import Image from "next/image";
import styles from '../styles/index.module.scss'
import {ImageBox} from "../styled/image";
import {ContactMe} from "../components/ProfileContactInfo";
import {SkillsAndServices} from "../components/SkillsAndServices";

const Index = () => {
  const [screen, setScreen] = useState({width: 1280, height: 800})
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArrayWho = 'Shamil'.split('')
  const strArrayWhat = 'Dev Portfolio'.split('')
  const [transformString, setTransformString] = useState('')

  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 1000)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  const handleMouseMove = event => {
    const {clientX, clientY} = event
    setTransformString(`perspective(20em) rotateX(${clientX * 15 / screen.width}deg) rotateY(${clientY * 15 / screen.height}deg)`)
  }

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight
    })
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <PageBox>
      <TextHuge>
        <TextHugeStyling>
          Profile
        </TextHugeStyling>
      </TextHuge>
      {/*<SkillsAndServices />*/}
      <ContactMe transformString={transformString} />
      <div className={styles['right-bottom-box']}>
        <div className={styles.box}>
          <div className={styles.pic}></div>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArrayWho}
            idx={1}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArrayWhat}
            idx={7}
          />
        </div>
      </div>
    </PageBox>
  )
}

export default Index;