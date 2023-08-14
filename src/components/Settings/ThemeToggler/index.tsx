import { styled } from '@stitches/react';
import { useAtom } from 'jotai';
import { Moon, Sun } from 'react-feather';
import { ETheme, themeAtom } from 'src/state';

const TogleThemeContainer = styled('div', {
  height: '28px',
  overflowY: 'hidden',

  svg: {
    display: 'block',
    height: '28px !important',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in-out',
    transitionDelay: '0s',

    '&.dark': {
      transform: 'translateY(-28px)',
    },

    '&.light': {
      transform: 'translateY(0px)',
    },
  },
});

export function ThemeToggler(): JSX.Element {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeChange = () => {
    if (theme === ETheme.light) {
      document.body.classList.replace('light-mode', 'dark-mode');
      setTheme(ETheme.dark);
    } else {
      document.body.classList.replace('dark-mode', 'light-mode');
      setTheme(ETheme.light);
    }
  };

  return (
    <button type="button" onClick={handleThemeChange}>
      <TogleThemeContainer>
        <Sun className={theme} />
        <Moon className={theme} />
      </TogleThemeContainer>
    </button>
  );
}
