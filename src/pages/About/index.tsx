import {
  generateKey,
  generateLorem,
  generateMockArray,
} from 'src/assets/utils';
import { customStyled } from 'src/assets/utils/stitches';
import useCopy from 'src/state/copy';
import bugio from 'src/assets/images/bugio.jpg';
import bitwardenLogo from 'src/assets/images/bitwarden.avif';
import { ImgWithTooltip } from 'src/components/ImgWithTooltip';
import { Signature } from 'src/components/Signature';

const AboutPageStyle = customStyled('article', {
  width: '100%',
  h1: {
    fontSize: 48,
  },

  '.about-me': {
    display: 'flex',
    flexDirection: 'row',

    div: {
      width: '50%',
    },

    '.left-panel': {
      '.my-description': {
        width: '100%',
        p: {
          width: '100%',
          marginBottom: 30,

          '&:last-child': {
            marginBottom: 0,
          },
        },
      },

      '.signature': {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%',
      },
    },

    '.right-panel': {
      img: {
        flexGrow: 0,
        maxWidth: '100%',
        margin: '0 20px',
      },
    },
  },

  '.about-work': {
    width: '100%',
    display: 'flex',

    h2: {
      marginBottom: 10,
    },

    li: {
      listStyle: 'none',
      marginBottom: 20,
    },

    div: {
      flexGrow: 1,
    },
  },

  '.about-stack': {
    div: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      rowGap: 20,
      justifyItems: 'center',

      img: {
        width: 64,
        aspectRatio: 1,
        borderRadius: 10,
      },
    },
  },
});

export default function About(): JSX.Element {
  const { aboutTitle, aboutDescription } = useCopy();
  return (
    <AboutPageStyle>
      <h1>{aboutTitle}</h1>
      <section className="about-me">
        <div className="left-panel">
          <div className="my-description">
            {aboutDescription.map((sentence) => (
              <p key={generateKey(sentence)}>{sentence}</p>
            ))}
          </div>
          <div className="signature">
            <Signature />
          </div>
        </div>
        <div className="right-panel">
          <img src={bugio} alt="bugio" />
        </div>
      </section>
      <section className="about-work">
        <div className="about-what-i-do">
          <h2>What I do</h2>
          <ul>
            <li>Web and mobile app development</li>
            <li>Database development and Ops</li>
            <li>UX Thinking & Research</li>
            <li>Wireframing & Prototyping</li>
          </ul>
        </div>
        <div className="about-work-history">
          <h2>Work History</h2>
          <ul>
            <li>
              <h3>Place</h3>
              <h4>Job Title</h4>
              <p>From - To</p>
            </li>
            <li>
              <h3>Place</h3>
              <h4>Job Title</h4>
              <p>From - To</p>
            </li>
            <li>
              <h3>Place</h3>
              <h4>Job Title</h4>
              <p>From - To</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="about-stack">
        <h2>My stack</h2>
        <div>
          {generateMockArray(10).map((item) => (
            <ImgWithTooltip
              imgSrc={bitwardenLogo}
              toolTipContent={<p>{generateLorem(1, 20)[0]}</p>}
              key={item}
            />
          ))}
        </div>
      </section>
    </AboutPageStyle>
  );
}
