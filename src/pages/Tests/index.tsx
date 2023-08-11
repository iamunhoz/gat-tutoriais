import { customStyled } from 'src/assets/utils/stitches';
import { Signature } from 'src/components/Signature';

const StyleContainer = customStyled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export function Tests(): JSX.Element {
  return (
    <StyleContainer>
      <Signature />
    </StyleContainer>
  );
}
