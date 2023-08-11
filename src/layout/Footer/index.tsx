import { customStyled } from 'src/assets/utils/stitches';
import { SecretsToggler } from 'src/components/Settings/SecretsToggler';

const StyledFooter = customStyled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  opacity: 0.5,
});

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <span>
        Developed with: React - Typescript - Vite - Stitches - Jotai - Radix-UI
      </span>
      <SecretsToggler />
    </StyledFooter>
  );
}
