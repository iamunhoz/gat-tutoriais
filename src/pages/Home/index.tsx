/**
 * receita:
 *
 * dois quadrantes:
 *  esquerdo: um hero text grandão
 *  direito: texto mais explicativo + 1 ou 2 action buttons

   canto direito (absolute) :
    stick man walking (perna preta e perna cinza em rotação)
 *
 */
import useCopy from 'src/state/copy';
import { Link } from 'react-router-dom';
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

  '.home-links-container': {
    display: 'flex',
    gap: 10,

    a: {
      fontSize: 16,
    },

    '.home-link-about': {
      backgroundColor: 'rgb(16, 16, 16)',
      color: 'rgb(250, 250, 250)',

      '&:hover': {
        color: 'rgb(16, 16, 16)',
        backgroundColor: 'var(--accent-color)',
      },
    },

    '.home-link-projects': {
      border: '2px solid gray',

      '&:hover': {
        border: '2px solid var(--accent-color)',
      },
    },
  },

  a: {
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '10px',
  },
});

export default function Home(): JSX.Element {
  const { heroTitle, heroDescription, homeButtonAbout, linkProjects } =
    useCopy();
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
        <div className="home-links-container">
          <Link to="/about" className="home-link-about">
            {homeButtonAbout}
          </Link>
          <Link to="/projects" className="home-link-projects">
            {linkProjects}
          </Link>
        </div>
      </section>
    </HomePageStyle>
  );
}
