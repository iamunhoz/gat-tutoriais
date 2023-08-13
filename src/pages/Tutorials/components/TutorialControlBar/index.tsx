import { ThumbsUp, Bookmark, PlayCircle, MessageCircle } from 'react-feather';
import { customStyled } from 'src/assets/utils/stitches';

const ControlBarContainer = customStyled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0',

  button: {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  '.left, .left button': {
    display: 'flex',
    alignItems: 'center',
  },
});

export function TutorialControlBar(): JSX.Element {
  return (
    <ControlBarContainer>
      <div className="left">
        <button type="button">
          <ThumbsUp />
          12
        </button>
        <button type="button">
          <MessageCircle />
        </button>
      </div>
      <div className="right">
        <button type="button">
          <PlayCircle />
        </button>
        <button type="button">
          <Bookmark />
        </button>
      </div>
    </ControlBarContainer>
  );
}
