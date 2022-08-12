import { Header } from '../components/Header'
import '../styles/globals.css'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import { slideRight } from "../lib/animations"
import {useEffect, useRef, useState} from "react";


function MyApp({ Component, pageProps, router }) {
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
    <div ref={cursorRef} className='app-cursor'></div>
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
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  </div>
}

export default MyApp
