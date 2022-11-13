import {PageBox} from "../styled/pages";
import {BotCards} from "../components/botCards";
import {AnimatedLetters} from "../components/AnimatedLetters";
import {useEffect, useState} from "react";
import {TextHugeHeadingBoxStyling, TextHugeHeadingStyling, TextHugeStyling} from "../styled/text";
import {PricingSectionWrapper} from "../styled/PricingSectionWrapper";

export const Pricing = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArrayBots = 'Discord Bots — discord.js + Sequelize + PostgreSQL'.split('')
  const color = "var(--app-color-0)"

  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  return (
    <PageBox padding='0px 16px 64px' color={color}>
      <div style={{padding: 64, paddingBottom: 24}}>
        <TextHugeStyling color={color}>
          Pricing
        </TextHugeStyling>
      </div>
      <PricingSectionWrapper onClick={() => setSelectedId(null)}>
        <TextHugeHeadingBoxStyling>
          <TextHugeHeadingStyling size={'5vw'} minSize={'32px'}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArrayBots}
              idx={1}
            />
          </TextHugeHeadingStyling>
        </TextHugeHeadingBoxStyling>
        <BotCards setSelectedId={setSelectedId} selectedId={selectedId} />
      </PricingSectionWrapper>
    </PageBox>
  )
}

export default Pricing;