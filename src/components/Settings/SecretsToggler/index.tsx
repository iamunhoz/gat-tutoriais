import { Square } from 'react-feather';
import { useAtom } from 'jotai';
import { isLocalHost } from 'src/assets/utils';
import * as Popover from '@radix-ui/react-popover';
import { borderAtom } from 'src/state';
import { css } from '@stitches/react';
import { Link } from 'react-router-dom';
import { StickMan } from 'src/components/Animations/StickMan';

const absoluteBottomRightContainer = css({
  // position: 'absolute',
  // right: 0,
  // bottom: 0,
  display: 'flex',

  '.opaque': {
    opacity: 0.1,
  },
});

export function SecretsToggler(): JSX.Element {
  const [border, setBorder] = useAtom(borderAtom);

  const handleBorderChange = () => {
    if (border === 'with') {
      setBorder('without');
    } else {
      setBorder('with');
    }
  };
  return (
    <div className={absoluteBottomRightContainer()} hidden={!isLocalHost()}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            type="button"
            className="IconButton"
            aria-label="Update dimensions"
          >
            <StickMan />
          </button>
        </Popover.Trigger>
        <Popover.Content className="popover-content" sideOffset={5}>
          <Link to="tests" className="opaque">
            tests
          </Link>
          <button type="button" onClick={handleBorderChange} className="opaque">
            <Square />
          </button>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
