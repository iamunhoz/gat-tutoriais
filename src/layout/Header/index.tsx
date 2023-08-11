import { useAtom } from 'jotai';
import { themeAtom } from 'src/state';
import { PageLinks } from 'src/components/PageLinks';
import { customStyled } from 'src/assets/utils/stitches';
import { Settings } from 'src/components/Settings';

const StyledHeader = customStyled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
  },

  '.selected-route': {
    position: 'relative',
    '&:after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 7,
      width: '50%',
      height: '1px',
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
      <nav>
        <PageLinks />
      </nav>
      <Settings />
    </StyledHeader>
  );
}
