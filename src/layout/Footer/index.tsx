import { Link } from 'react-router-dom';
import { customStyled } from 'src/assets/utils/stitches';
// import { SecretsToggler } from 'src/components/Settings/SecretsToggler';
import GatLogo from 'src/favicon.svg';

const StyledFooter = customStyled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  opacity: 0.5,

  img: {
    width: 15,
    height: 15,
  },
});

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <img src={GatLogo} alt="gat-logo" />
      <Link to="https://www.gatinfosec.com">GAT Infosec</Link>
      {/* <SecretsToggler /> */}
    </StyledFooter>
  );
}
