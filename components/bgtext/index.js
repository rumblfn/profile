import {useEffect, useState} from "react";
import style from './style.module.scss'

let text = `
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// _app.js

import { Header } from '../components/Header'
import '../styles/globals.css'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import { slideRight } from "../lib/animations"
import {createContext, useEffect, useRef, useState} from "react";
import Image from "next/image";

export const CursorImageContext = createContext({})

function MyApp({ Component, pageProps, router }) {
  const [image, setImage] = useState('')
  const cursorRef = useRef()

  const handleMouseMove = event => {
    const {clientX, clientY} = event
    const mouseX = clientX - cursorRef.current.clientWidth / 2
    const mouseY = clientY - cursorRef.current.clientHeight / 2

    cursorRef.current.style.transform = \`translate3d(\${mouseX}px, \${mouseY}px, 0)\`
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div style={{position: 'relative'}}>
    <Header/>
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter={true} >
        <m.div
          key={router.route.concat(slideRight.name)}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideRight.variants}
          transition={slideRight.transition}
        >
          <CursorImageContext.Provider value={{setImage}}>
            <Component {...pageProps} />
          </CursorImageContext.Provider>
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  </div>
}

// pages/index.js

import {useEffect, useState} from "react";
import {PageBox} from "../styled/pages";
import {TextHuge, TextHugeStyling} from "../styled/text";
import {AnimatedLetters} from "../components/AnimatedLetters";
import styles from '../styles/index.module.scss'
import {ContactMe} from "../components/ProfileContactInfo";
import {SkillsAndServices} from "../components/SkillsAndServices";
import {useMediaQuery} from "../hooks/useMediaQuery";

const Index = () => {
  const [screen, setScreen] = useState({width: 1280, height: 800})
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
    setTransformString(\`perspective(20em) rotateX(\${clientX * 15 / screen.width}deg) rotateY(\${clientY * 15 / screen.height}deg)\`)
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

  if (tablet) {
    return <PageBox padding='24px' height='fit-content'>
      <TextHuge>
        <TextHugeStyling>
          Profile
        </TextHugeStyling>
      </TextHuge>
      <div className={styles['wrap-box']}>
        <div className={styles['pic-tablet-box']}>
          <div className={styles['pic-tablet']}></div>
        </div>
        <div className={styles.box} style={{marginBottom: 24}}>
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
      <ContactMe transformString={transformString} />
    </PageBox>
  }

  return (
    <PageBox>
      <TextHuge>
        <TextHugeStyling>
          Profile
        </TextHugeStyling>
      </TextHuge>
      <SkillsAndServices letterClass={letterClass} />
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

// works.js

import { PageBox } from "../styled/pages";
import { TextHuge, TextHugeStyling } from "../styled/text";

export const Works = () => {
  const color = "var(--app-color-5)"
  return (
    <PageBox color={color}>
      <TextHuge>
        <TextHugeStyling color={color}>
          Works
        </TextHugeStyling>
      </TextHuge>
    </PageBox>
  )
}

// animations.js

export const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      position: 'relative',
      right: "-100%",
      scale: 0.7,
      filter: 'brightness(90%)',
    },
    animate: {
      right: 0,
      scale: 1,
      filter: 'brightness(100%)'
    },
    exit: {
      right: ['0%', '-15%', "110%"],
      scale: 0.7,
      filter: 'brightness(70%)'
    }
  },
  transition: {
    type: "spring", stiffness: 50
  }
}

// useMediaQuery.js

import {useCallback, useEffect, useState} from "react";

export const useMediaQuery = width =>
{
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) =>
  {
    if (e.matches) setTargetReached(true)
    else setTargetReached(false)
  }, [])

  useEffect(() =>
  {
    const media = window.matchMedia(\`(max-width: \${width}px)\`)
    media.addEventListener('change', updateTarget)

    if (media.matches) setTargetReached(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached
}

// Header.js

import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { AnimatedLetters } from "./AnimatedLetters"

const HeaderBox = styled.div\`
    height: 64px;
    padding: 0 32px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    position: relative;
    z-index: 10;
    font-size: 22px;
\`

export const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const linkProfileArray = ["Profile"]
  const linkWorksArray = ['Works']

  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  return (
    <HeaderBox>
      <Link href="/">
        <a>
          <AnimatedLetters
            classtype='title'
            letterClass={letterClass}
            strArray={linkProfileArray}
            idx={15}
          />
        </a>
      </Link>
      <Link href="/works">
        <a>
          <AnimatedLetters
            classtype='title'
            letterClass={letterClass}
            strArray={linkWorksArray}
            idx={22}
          />
        </a>
      </Link>
    </HeaderBox>
  )
}

// index.js

import styles from "./index.module.scss";
import {AnimatedLetters} from "../AnimatedLetters";
import {useState} from "react";
import {Skills} from "./skills";
import {Services} from "./services";

export const SkillsAndServices = ({letterClass}) => {
  const strArray = 'Full-stack Web Developer'.split('')
  const strArraySkills = 'Skills'.split('')
  const strArrayServices = 'Services'.split('')

  const [selectedType, setSelectedType] = useState('skills')

  return <div className={styles['left-top-box']}>
    <div className={styles['box-with-animation']} style={{fontSize: 30}}>
      <AnimatedLetters strArray={strArray} letterClass={letterClass} idx={21} classtype='title' />
      <div className={styles['types']}>
        <div onClick={() => setSelectedType('skills')}>
          <AnimatedLetters classtype='subtitle' strArray={strArraySkills} letterClass={letterClass} idx={30} />
        </div>
        <div onClick={() => setSelectedType('services')}>
          <AnimatedLetters classtype='subtitle' strArray={strArrayServices} letterClass={letterClass} idx={35} />
        </div>
      </div>
      <div className={styles.main}>
        {selectedType === 'skills' ? <Skills /> : <Services /> }
      </div>
    </div>
  </div>
}

// services.js

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
    <div className={\`\${styles.item} \${styles._1}\`} style={{left: first && 0}}>
      <p className={styles['sub-title']}>Website development</p>
    </div>
    <div className={\`\${styles.item} \${styles._2}\`} style={{left: second && 0}}>
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
    <div className={\`\${styles.item} \${styles._3}\`} style={{marginTop: 12, left: third && 0}}>
      <p className={styles['sub-title']}>Discord bots</p>
      <p className={styles.desc}>All in one</p>
    </div>
  </div>
}

// skills.js

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
    <div className={\`\${styles.item} \${styles._1}\`} style={{left: first && 0}}>
      <p className={styles['sub-title']}>Frontend</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/nextjs.png')} onMouseLeave={() => setImage('')}>Next/</span>
        <span onMouseOver={() => setImage('/react.svg.png')} onMouseLeave={() => setImage('')}>React/</span>
        <span onMouseOver={() => setImage('/redux.png')} onMouseLeave={() => setImage('')}>Redux </span>
        <span onMouseOver={() => setImage('/TS.svg.png')} onMouseLeave={() => setImage('')}>TS/</span>
        <span onMouseOver={() => setImage('/JS.png')} onMouseLeave={() => setImage('')}>JS</span>
      </p>
    </div>
    <div className={\`\${styles.item} \${styles._2}\`} style={{marginTop: 12, left: second && 0}}>
      <p className={styles['sub-title']}>Backend</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/express.png')} onMouseLeave={() => setImage('')}>Express </span>
        <span onMouseOver={() => setImage('/redis.png')} onMouseLeave={() => setImage('')}>Redis </span>
        <span onMouseOver={() => setImage('/pg.svg.png')} onMouseLeave={() => setImage('')}>PostgreSQL</span>
      </p>
    </div>
    <div className={\`\${styles.item} \${styles._3}\`} style={{marginTop: 12, left: third && 0}}>
      <p className={styles['sub-title']}>Discord Bots</p>
      <p className={styles['desc']}>
        <span onMouseOver={() => setImage('/ds.png')} onMouseLeave={() => setImage('')}>discord.js</span>
      </p>
    </div>
    <div className={\`\${styles.item} \${styles._4}\`} style={{marginTop: 12, left: fourth && 0}}>
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

// index.js

import styles from "./index.module.scss";
import stylesletters from '../../styles/AnimatedLetters.module.scss'
import Image from "next/image";

export const ContactMe = ({transformString}) => {
  return <div className={styles['left-bottom-box']}>
    <div className={styles['box-with-animation']} style={{transform: transformString, fontSize: 30}}>
      <p className={stylesletters.title}>Contact Me</p>
      <div className={styles['about-item']}>
        <p className={styles.text}>sham#6666</p>
      </div>
      <div className={styles['about-item']}>
        <a href='https://github.com/rumblfn' target='_blank' rel="noreferrer">
          <p className={styles.text}>GitHub/rumblfn</p>
        </a>
      </div>
      <div className={styles['about-item']}>
        <a href='mailto:toshamilgis@gmail.com' target='_blank' rel="noreferrer">
          <p className={styles.text}>Gmail/toshamilgis</p>
        </a>
      </div>
    </div>
  </div>
`

let idx = 0
let textlength = text.length

export const BgText = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [textview, setText] = useState('')

  useEffect(() => {
    setInterval(() => {
      setText(text.slice(0, idx))
      idx++
    }, 100)
  }, []);

  return <pre className={style.text}>
    {textview}
  </pre>
}