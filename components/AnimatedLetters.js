import styles from '../styles/AnimatedLetters.module.scss'

export const AnimatedLetters = ({letterClass, strArray, idx, color, classtype}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span style={{color}} key={char + i} className={`${styles[letterClass]} ${styles[classtype]} ${styles[`_${i + idx}`]}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}