import styled from "styled-components";
import styles from './style.module.scss'

const WorkWrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  overflow: hidden;
  position: relative;

  &:hover div:first-child {
    transform: scale(1.05);
    filter: brightness(38%);
  }
  
  &:hover div:last-child {
    transform: translateY(0%);
  }
`

const ImageWrapper = styled.div`
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all .22s ease;
`

const ShortInfoHoverBox = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  transform: translateY(-120%);
  transition: all .44s ease;
`

const Heading = styled.h4`
  font-size: 24px;
  margin-bottom: 15px;
  color: #feffdf;
`

const Description = styled.p`
  font-size: ${props => props.fs ? props.fs : '18px'};
  margin-bottom: ${props => props.mb ? props.mb : '0'};
`

const LinksList = styled.div`
  & ul {
    list-style-type: none;
    & li {
      font-size: 18px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
`

export const WorkPreview = ({work}) => {
  return <WorkWrapper onClick={() => window.open(work.homepage, '_blank')}>
    <ImageWrapper url={work.images[0]}/>
    <ShortInfoHoverBox>
      <Heading>{work.name}</Heading>
      <Description mb='12px'>Homepage: <p className={styles['text-hover']}>{work.homepage}</p></Description>
      <Description mb='20px'>{work.description}</Description>
      <LinksList>
        <Description fs='22px'>GitHub Links</Description>
        <ul>
          {work.github.map((link, idx) =>
            <li onClick={e => e.stopPropagation()} key={work.name + 'github' + idx} className={styles['text-hover']}>
              <a target='_blank' href={link.value} rel="noreferrer">{link.name}</a>
            </li>
          )}
        </ul>
      </LinksList>
    </ShortInfoHoverBox>
  </WorkWrapper>
}