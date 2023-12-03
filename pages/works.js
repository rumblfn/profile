import {PageBox} from "../styled/pages";
import {TextHugeStyling} from "../styled/text";
import {GridWorksBox, GridWorksWrapper} from "../styled/gridbox";
import {ImageWrapper, WorkPreview} from "../components/Work";

export async function getStaticProps() {
  const guilds = [
    {
      invite_link: 'https://discord.gg/decide',
      name: 'DECIDE',
      image_url: '/guilds/decide.gif'
    },
    {
      invite_link: 'https://discord.gg/jamhub',
      name: 'JAM',
      image_url: '/guilds/jam.gif'
    },
    {
      invite_link: 'https://discord.gg/futama',
      name: 'FUTAMA',
      image_url: '/guilds/futama.png'
    },
    {
      invite_link: 'https://discord.gg/crystalys',
      name: 'CRYSTALYS',
      image_url: '/guilds/crystalys.gif'
    },
    {
      invite_link: 'https://discord.gg/xory-1026874373254164642',
      name: 'XORY',
      image_url: '/guilds/xory.png'
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
      homepage: 'http://46.19.65.187:3000'
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
      name: 'Books searcher',
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
    },
    {
      name: 'Simplified clone of whatsapp',
      description: `An application for receiving and sending WhatsApp messages using the Green Api. For authorization, you need to use data from the Green Api system`,
      github: [
        {
          name: 'repo',
          value: 'https://github.com/rumblfn/GreenApiReactTestWork'
        }
      ],
      images: ['/worksimages/wh2.png'],
      homepage: 'https://6463d1e9a7111d00baf3cd6d--lighthearted-griffin-1d5726.netlify.app/'
    },
    {
      name: 'Aak Discord Bot',
      description: `Discord bot with customization via the website and support for multiple languages. Change server settings and profiles using a convenient panel`,
      github: [
        {
          name: 'repo',
          value: 'https://github.com/rumblfn/'
        }
      ],
      images: ['/worksimages/aak1.png'],
      homepage: 'https://aakbot.ru/'
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