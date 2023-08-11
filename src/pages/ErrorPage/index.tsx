import { XCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import { customStyled } from 'src/assets/utils/stitches';
import { red } from '@radix-ui/colors';
import { useAtomValue } from 'jotai';
import { themeAtom } from 'src/state';

const ErrorPageStyle = customStyled('div', {
  variants: {
    theme: {
      light: {
        'h1, h2': {
          backgroundColor: '#FFF',
          color: '#000',
        },
      },
      dark: {
        'h1, h2, a': {
          backgroundColor: '#000',
          color: '#FFF',
        },
      },
    },
  },
  height: '100vh',
  width: '100vw',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30,

  paddingTop: 100,

  svg: {
    height: 200,
    width: 200,
    color: red.red11,
  },

  a: {
    border: '2px solid #FFF',
    borderRadius: 10,
    padding: 5,

    '&:hover': {
      border: '2px solid var(--accent-color)',
    },
  },
});

export function ErrorPage(): JSX.Element {
  const theme = useAtomValue(themeAtom);

  return (
    <ErrorPageStyle theme={theme}>
      <XCircle />
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar à página principal</Link>
    </ErrorPageStyle>
  );
}
