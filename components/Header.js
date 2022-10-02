import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { AnimatedLetters } from "./AnimatedLetters"

const HeaderBox = styled.div`
    height: 64px;
    padding: 0 32px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    position: relative;
    z-index: 10;
    font-size: 22px;
    background-color: var(--app-color-2);
`

export const Header = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const linkProfileArray = ["Profile"]
    const linkWorksArray = ['Works']
    const pricingArray = ['Pricing']

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
            <Link href="/pricing">
                <a>
                    <AnimatedLetters
                      classtype='title'
                      letterClass={letterClass}
                      strArray={pricingArray}
                      idx={29}
                    />
                </a>
            </Link>
        </HeaderBox>
    )
}