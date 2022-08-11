import styles from '../styles/AnimatedLetters.module.scss'

export const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${styles[letterClass]} ${styles[`_${i + idx}`]}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}