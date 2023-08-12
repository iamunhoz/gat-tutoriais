import useCopy from 'src/state/copy';
import { customStyled } from 'src/assets/utils/stitches';

const HomePageStyle = customStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',

  padding: 20,

  '@lg': {
    flexDirection: 'row',
  },

  h1: {
    fontSize: 48,
    lineHeight: 1.25,
    fontWeight: 500,

    '@lg': {
      fontSize: 64,
      minWidth: 400,
    },
  },

  p: {
    fontSize: 16,
    marginBottom: 12,

    '@md': { fontSize: 20 },
  },

  a: {
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '10px',
  },
});

export default function Home(): JSX.Element {
  const { heroTitle, heroDescription } = useCopy();
  return (
    <HomePageStyle>
      <section className="hero-title">
        <h1>{heroTitle}</h1>
      </section>
      <section className="hero-description">
        <div>
          {heroDescription.map((sentence) => (
            <p key={sentence.substring(0, 5)}>{sentence}</p>
          ))}
        </div>
      </section>
    </HomePageStyle>
  );
}
