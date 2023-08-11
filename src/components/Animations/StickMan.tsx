import { customStyled, customKeyframes } from 'src/assets/utils/stitches';

const moveRightArm = customKeyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(61deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

const moveLeftArm = customKeyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(-61deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

const moveRight = customKeyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(50deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

const moveLeft = customKeyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(-50deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

const AnimatedSvg = customStyled('div', {
  svg: {
    width: '20px',
    height: '20px',

    '.stickman-head': {},
    '.stickman-body': {},
    '.stickman-right-arm': {
      transformOrigin: 'top left',
      animation: `${moveRightArm} linear 1300ms infinite`,
    },
    '.stickman-left-arm': {
      color: 'gray',
      transformOrigin: 'top right',
      animation: `${moveLeftArm} linear 1300ms infinite`,
    },

    '.legs, .arms': {
      transformBox: 'fill-box',
    },

    '.stickman-right-leg': {
      transformOrigin: 'top left',
      color: 'gray',
      animation: `${moveRight} linear 1300ms infinite`,
    },
    '.stickman-left-leg': {
      transformOrigin: 'top right',
      animation: `${moveLeft} linear 1300ms infinite`,
    },

    /* '*': {
      animation: 'none !important',
    }, */
  },
});

export function StickMan(): JSX.Element {
  return (
    <AnimatedSvg>
      <svg stroke="currentColor" strokeWidth={1} viewBox="0 0 100 100">
        {/* head */}
        <circle
          cx="50"
          cy="20"
          r="10"
          fill="transparent"
          className="stickman-head"
        />
        <circle
          cx="44"
          cy="18"
          r="1"
          className="stickman-head"
          strokeWidth={2}
        />
        {/* left arm */}
        <line
          x1="50"
          y1="35"
          x2="35"
          y2="60"
          className="arms stickman-left-arm"
        />

        {/* body */}
        <line x1="50" y1="30" x2="50" y2="60" className="stickman-body" />

        {/* right arm */}
        <line
          x1="50"
          y1="35"
          x2="65"
          y2="60"
          className="arms stickman-right-arm"
        />

        {/* right leg */}
        <line
          x1="50"
          y1="60"
          x2="65"
          y2="90"
          className="legs stickman-right-leg"
        />
        {/* left leg */}
        <line
          x1="50"
          y1="60"
          x2="35"
          y2="90"
          className="legs stickman-left-leg"
        />
      </svg>
    </AnimatedSvg>
  );
}
