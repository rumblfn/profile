import {useEffect, useState} from "react";
import {PageBox} from "../styled/pages";
import {TextHuge, TextHugeStyling} from "../styled/text";
import {AnimatedLetters} from "../components/AnimatedLetters";
import styles from '../styles/index.module.scss'
import {ContactMe} from "../components/ProfileContactInfo";
import {SkillsAndServices} from "../components/SkillsAndServices";
import {useMediaQuery} from "../hooks/useMediaQuery";
import {IndexPageBottomHoc} from "../components/hocs/indexPageBottom";

const Index = () => {
  const [screen, setScreen] = useState({width: 1280, height: 800})
  const [posContactMe, setPosContactMe] = useState({x: 0, y: 0})
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArrayWho = 'Shamil'.split('')
  const strArrayWhat = 'Dev Portfolio'.split('')
  const [transformString, setTransformString] = useState('')
  const tablet = useMediaQuery(832)

  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  const handleMouseMove = event => {
    const {clientX, clientY} = event
    setTransformString(`
    perspective(40em)
      rotateX(
        ${(clientX - posContactMe.x) / screen.width}deg
      )
      rotateZ(
        ${(posContactMe.y - clientY) / screen.height}deg
      )
    `)
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
    <PageBox padding={tablet && '24px 36px 24px 24px'}>
      <TextHuge>
        <TextHugeStyling>
          Profile
        </TextHugeStyling>
        <TextHugeStyling color={'var(--app-color-5)'} size={'5vw'} minSize={'24px'}>
          Hi 👋, I am a
        </TextHugeStyling>
        <TextHugeStyling color={'var(--app-color-1)'} size={'7vw'} minSize={'32px'}>
          Full-stack <br/> Web Developer
        </TextHugeStyling>
      </TextHuge>
      <IndexPageBottomHoc tablet={tablet}>
        <div className={styles[tablet ? 'wrap-box' : 'right-bottom-box']}>
          <div className={styles.box}>
            {tablet ?
              <div className={styles['pic-tablet-box']}>
                <div className={styles['pic-tablet']}></div>
              </div>
              : <div className={styles.pic}></div>
            }
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
        <SkillsAndServices letterClass={letterClass} />
        <ContactMe
          transformString={transformString}
          setPosContactMe={setPosContactMe}
        />
      </IndexPageBottomHoc>
    </PageBox>
  )
}

export default Index;