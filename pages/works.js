import {PageBox} from "../styled/pages";
import {TextHugeStyling} from "../styled/text";
import {GridWorksBox, GridWorksWrapper} from "../styled/gridbox";
import {WorkPreview} from "../components/Work";

const works = [
  {
    name: 'React messenger',
    description: `
      My attempt to create my own real-time messenger.
      Technologies: Express, PostgreSQL, Redis, React/Redux, SocketIO, ChakraUI, Formik
    `,
    github: [
      {
        name: 'client',
        value: 'https://github.com/rumblfn/react-messanger'
      },
      {
        name: 'server',
        value: 'https://github.com/rumblfn/messenger-server'
      },
      {
        name: 'messenger client/server meetings',
        value: 'https://github.com/rumblfn/messenger-meetings'
      }
    ],
    images: [
      '/worksimages/messenger1.png',
      '/worksimages/messenger2.png'
    ],
    homepage: 'http://82.148.17.229:3001/home'
  },
  {
    name: 'Note',
    description: `
      Simple note editor, test assignment for the junior front-end position.
      Stack: React/Redux + TypeScript
    `,
    github: [
      {
        name: 'note-editor-repo',
        value: 'https://github.com/rumblfn/note-editor'
      }
    ],
    images: ['/worksimages/note1.png'],
    homepage: 'https://rainbow-alpaca-4674bd.netlify.app/'
  },
  {
    name: 'books searcher',
    description: `
      Google API Books searcher, test assignment for the junior front-end position.
      Stack: React/Redux + TypeScript
    `,
    github: [
      {
        name: 'repo',
        value: 'https://github.com/rumblfn/frontend-challenge-books'
      }
    ],
    images: [
      '/worksimages/books1.png',
      '/worksimages/books2.png',
    ],
    homepage: 'https://rumblfn.github.io/frontend-challenge-books/'
  }
]

export const Works = () => {
  const color = "var(--app-color-0)"

  return (
    <PageBox padding='0px' color={color}>
      <div style={{padding: 64, paddingBottom: 24}}>
        <TextHugeStyling color={color}>
          Works
        </TextHugeStyling>
      </div>
      <GridWorksWrapper>
        <GridWorksBox>
          {works.map((work, idx) => <WorkPreview key={idx} work={work} />)}
        </GridWorksBox>
      </GridWorksWrapper>
    </PageBox>
  )
}

export default Works;