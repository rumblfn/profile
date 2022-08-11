import { useEffect, useState } from "react";
import { PageBox } from "../styled/pages";
import { TextHuge, TextHugeStyling } from "../styled/text";
import { AnimatedLetters } from "../components/AnimatedLetters";
import Image from "next/image";
import { ImageBox } from "../styled/image";

const Index = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArrayWho = 'Shamil Valiakhmetov'.split('')
    const strArrayWhat = 'Dev Portfolio'.split('')

    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 1000)

    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    }, [timer])

    return (
        <PageBox>
            <TextHuge>
                <TextHugeStyling>
                    Profile
                </TextHugeStyling>
            </TextHuge>
            <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                <div style={{display: 'flex', flexDirection: 'column', fontSize: '4vw', alignItems: 'flex-end'}}>
                    {/*<ImageBox>*/}
                    {/*    <Image alt="profile" objectFit="cover"*/}
                    {/*        width={400} height={400}*/}
                    {/*    />*/}
                    {/*</ImageBox>*/}
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={strArrayWho}
                        idx={1}
                    />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={strArrayWhat}
                        idx={20}
                    />
                </div>
            </div>
        </PageBox>
    )
}

export default Index;