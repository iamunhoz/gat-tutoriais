import { Outlet } from 'react-router-dom';
import { styled } from '@stitches/react';
import { useAtomValue } from 'jotai';
import { borderAtom, themeAtom } from 'src/state';
import Footer from './Footer';
import Header from './Header';

const StylesContainer = styled('div', {
  variants: {
    border: {
      with: {
        '*': {
          border: '1px solid #EEE',
        },
      },
      without: {
        '*': {
          border: 0,
        },
      },
    },
    theme: {
      light: {
        '*': {
          backgroundColor: '#FFF',
          color: '#000',
        },
      },
      dark: {
        '*': {
          backgroundColor: '#000',
          color: '#FFF',
        },
      },
    },
  },

  // container styles
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1000,
  margin: '0 auto',
  minHeight: '100vh',

  // children styles
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,

    h1: {
      fontSize: 48,
      lineHeight: 1.25,
      fontWeight: 500,

      '@lg': {
        fontSize: 64,
        minWidth: 400,
      },
    },

    '& > *': {
      width: '100%',
      flexGrow: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  'header, footer': {
    flexGrow: 0,
  },
});

export default function Layout(): JSX.Element {
  const theme = useAtomValue(themeAtom);
  const border = useAtomValue(borderAtom);
  return (
    <StylesContainer theme={theme} border={border}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StylesContainer>
  );
}
