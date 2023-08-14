/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import useCopy from 'src/state/copy';
import { customStyled } from 'src/assets/utils/stitches';
import { ArrowUpRight } from 'react-feather';
import { useAtomValue } from 'jotai';
import { siteLanguageAtom } from 'src/state';
import { ContactForm } from './ContactForm';

const ContactPageStyle = customStyled('article', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    paddingRight: 500,
    paddingTop: 10,
  },

  '.flex-container': {
    display: 'flex',
    flexGrow: 1,
    paddingTop: 40,
    justifyContent: 'space-between',
    gap: 40,

    section: {
      maxWidth: '50%',
    },

    '.contact-links': {
      padding: '50px 10px',
    },

    '.contact-info': {
      p: {
        fontSize: 18,
      },

      ul: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,

        li: {
          listStyle: 'none',

          a: {
            display: 'flex',
            alignItems: 'end',

            '&:hover': {
              svg: {
                transform: 'scale(1.3)',
                transformBox: 'fill-box',
                transformOrigin: 'bottom left',
              },
            },
          },
        },
      },

      '& > div': {
        display: 'flex',
        justifyContent: 'space-between',
      },

      '.contact-email': {
        p: {
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: 14,
        },
      },
    },
  },

  '.contact-form-container': {
    flex: 1,
  },
});

export default function Contact(): JSX.Element {
  const { contactTitle, contactDescription, contactEmailTitle } = useCopy();
  const siteLanguage = useAtomValue(siteLanguageAtom);

  return (
    <ContactPageStyle>
      <h1>{contactTitle}</h1>
      <div className="flex-container">
        <section className="contact-info">
          <p>{contactDescription}</p>
          <div className="contact-links">
            <ul>
              <li>
                <Link to="https://www.gatinfosec.com" target="_blank">
                  GAT Infosec
                  <ArrowUpRight />
                </Link>
              </li>
              <li>
                <Link to="https://www.securityscore.com.br" target="_blank">
                  Security Score
                  <ArrowUpRight />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/c/GATInfoSec">
                  {siteLanguage === 'pt'
                    ? 'Nossa pagina no youtube'
                    : 'Our youtube page'}
                  :
                  <ArrowUpRight />
                </Link>
              </li>
            </ul>
            <div className="contact-email">
              <p>{contactEmailTitle}</p>
              <Link to="mailto:contato@gatinfosec.com">
                contato@gatinfosec.com
              </Link>
            </div>
          </div>
        </section>
        <section className="contact-form-container">
          <ContactForm />
        </section>
      </div>
    </ContactPageStyle>
  );
}
