import { useAtom } from 'jotai';
import { ETheme, themeAtom } from 'src/state';
import { PageLinks } from 'src/components/PageLinks';
import { customStyled } from 'src/assets/utils/stitches';
import { Settings } from 'src/components/Settings';
import GatLogoPositivo from 'src/assets/images/logo-gat-padrao-positivo.png';
import GatLogoNegativo from 'src/assets/images/logo-gat-padrao-negativo.png';

const StyledHeader = customStyled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  'nav, .left-side': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',

    img: {
      width: 45,
      height: 40,
    },

    h2: {
      marginRight: 10,
      color: 'var(--accent-color)',
    },
  },

  '.selected-route': {
    position: 'relative',
    color: 'var(--accent-color) !important',

    '&:after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 7,
      width: '50%',
      height: '1px',
      backgroundColor: 'var(--accent-color) !important',
    },
  },

  ul: {
    display: 'flex',
    flexDirection: 'row',
  },

  li: {
    listStyle: 'none',
  },

  a: {
    height: '100%',
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 12,

    '@sm': {
      fontSize: 18,
    },

    '@md': {
      fontSize: 24,
    },
  },

  svg: {
    maxHeight: 28,
  },

  button: {
    border: 0,
    boxShadow: 0,
  },

  'a, button': {
    cursor: 'pointer',
    padding: '3px 5px',
    borderRadius: '5px',
  },

  '.settings-bar': {
    display: 'none',

    '@md': {
      display: 'initial',
    },
  },

  '.settings-menu': {
    display: 'initial',

    '.popover-content': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border: '2px solid gray',
      borderRadius: 5,
      marginRight: 5,
      padding: 5,
    },

    '@md': {
      display: 'none',
    },
  },

  variants: {
    theme: {
      light: {
        'a:not(.github-link):hover': {
          backgroundColor: '#ECECEC',
          opacity: '0.8',
        },

        '.selected-route:after': {
          backgroundColor: '#333',
        },
      },
      dark: {
        'a:not(.github-link):hover': {
          backgroundColor: '#333',
          opacity: '0.7',
        },

        '.selected-route:after': {
          backgroundColor: '#ECECEC',
        },
      },
    },
  },
});

export default function Header(): JSX.Element {
  const [theme] = useAtom(themeAtom);

  return (
    <StyledHeader theme={theme}>
      <div className="left-side">
        <img
          src={theme === ETheme.light ? GatLogoPositivo : GatLogoNegativo}
          alt="gat-logo"
        />
        <h2>GAT ACADEMY</h2>
        <nav>
          <PageLinks />
        </nav>
      </div>
      <Settings />
    </StyledHeader>
  );
}
