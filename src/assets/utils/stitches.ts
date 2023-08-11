import { createStitches } from '@stitches/react';

// breakpoints based on
// https://gs.statcounter.com/screen-resolution-stats/
const { styled, css, keyframes } = createStitches({
  media: {
    sm: '(min-width: 358px)',
    md: '(min-width: 638px)',
    lg: '(min-width: 766px)',
    xl: '(min-width: 1364px)',
    xxl: '(min-width: 1918px)',
  },
});

export {
  styled as customStyled,
  css as customCss,
  keyframes as customKeyframes,
};
