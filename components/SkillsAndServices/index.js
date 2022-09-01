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