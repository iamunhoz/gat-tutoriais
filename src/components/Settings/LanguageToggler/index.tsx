import { styled } from '@stitches/react';
import { useAtom } from 'jotai';
import { siteLanguageAtom } from 'src/state';

const LanguageThemeContainer = styled('div', {
  position: 'relative',

  svg: {
    position: 'relative',
    transitionProperty: 'transform',
    transitionDuration: '0.4s',
    transitionTimingFunction: 'ease-in-out',
    transitionDelay: '0s',

    '&.shrink': {
      transform: 'scale(0.7)',
    },

    '&.grow': {
      transform: 'scale(1.2)',
    },
  },
});

export function LanguageToggler(): JSX.Element {
  const [language, setLanguage] = useAtom(siteLanguageAtom);

  const handleLanguageChange = () => {
    if (language === 'en') {
      setLanguage('pt');
    } else {
      setLanguage('en');
    }
  };

  return (
    <button type="button" onClick={handleLanguageChange} className="btn-lang">
      <LanguageThemeContainer>
        <svg
          className={language === 'en' ? 'grow' : 'shrink'}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={1}
          width={28}
          height={28}
        >
          <text x={6} y={18}>
            EN
          </text>
        </svg>
        <svg
          className={language === 'pt' ? 'grow' : 'shrink'}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={1}
          width={28}
          height={28}
        >
          <text x={6} y={18}>
            PT
          </text>
        </svg>
      </LanguageThemeContainer>
    </button>
  );
}
