import {Header} from '../components/Header'
import '../styles/globals.css'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import {slideRight} from "../lib/animations"
import {createContext, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {BgText} from "../components/bgtext";
import Head from "next/head";

export const CursorImageContext = createContext({})

function MyApp({Component, pageProps, router}) {
  const [image, setImage] = useState('')
  const cursorRef = useRef()

  const handleMouseMove = event => {
    const {clientX, clientY} = event
    const mouseX = clientX - cursorRef.current.clientWidth / 2
    const mouseY = clientY - cursorRef.current.clientHeight / 2

    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div style={{position: 'relative'}}>
    <Head>
      <meta charSet="utf-8"/>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <meta
        name="description"
        content="Rumblfn, aka: sham#6666 bio web site"
      />
      <title>rumblfn</title>
    </Head>
    <div ref={cursorRef} className='app-cursor' style={{backgroundColor: image && 'white'}}>
      {image ?
        <Image src={image} width='80px' height='80px' objectFit='cover'/>
        : <Image style={{opacity: '.3'}} src='/grid.jpg' width='80px' height='80px' objectFit='cover'/>
      }
    </div>
    <Header/>
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter={true}>
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
    <div className='code-box'>
      <BgText/>
    </div>
  </div>
}

export default MyApp
