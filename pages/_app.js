import { Header } from '../components/Header'
import '../styles/globals.css'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import { slideRight } from "../lib/animations"


function MyApp({ Component, pageProps, router }) {
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
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  </div>
}

export default MyApp
