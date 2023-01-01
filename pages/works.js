import {PageBox} from "../styled/pages";
import {TextHugeStyling} from "../styled/text";
import {GridWorksBox, GridWorksWrapper} from "../styled/gridbox";
import {ImageWrapper, WorkPreview} from "../components/Work";

export async function getStaticProps() {
  const guilds = [
    {
      invite_link: 'https://discord.gg/hatory',
      name: 'HATORY',
      image_url: 'https://cdn.discordapp.com/icons/894663985650081864/a_74c70f4c5f6e833b7b072c86f98fe010.gif?size=1024'
    }
  ]

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


  return {
    props: {
      works, guilds
    },
  }
}

export const Works = ({works, guilds}) => {
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
      <div style={{padding: 64, paddingBottom: 24}}>
        <TextHugeStyling color={color}>
          Guilds
        </TextHugeStyling>
      </div>
      <GridWorksWrapper>
        <div style={{
          display: 'flex', gap: 32, justifyContent: 'center',
          marginBottom: 64, flexWrap: 'wrap'
        }}>
          {guilds.map((guild, idx) =>
            <div key={'g' + idx} style={{textAlign: 'center'}}>
              <div
                onClick={() => window.open(guild.invite_link, '_blank')}
                style={{
                  borderRadius: '50%', overflow: 'hidden',
                  width: 200, height: 200,
                  margin: '0 auto 16px'
              }}>
                <ImageWrapper url={guild.image_url}/>
              </div>
              <h2>{guild.name}</h2>
            </div>
          )}
        </div>
      </GridWorksWrapper>
    </PageBox>
  )
}

export default Works;