/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-multi-str */

import { customStyled } from 'src/assets/utils/stitches';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import useCopy from 'src/state/copy';
import { siteLanguageAtom } from 'src/state';
import { TutorialControlBar } from './components';
import DashboardScreenshot from './posts/1-como-cadastrar-security-score/dashboard.png';
import BotaoComeceGratiscreenshot from './posts/1-como-cadastrar-security-score/botao-comece-gratis.png';
import CamposCadastro from './posts/1-como-cadastrar-security-score/campos-cadastro.png';
import CheckboxesCadastro from './posts/1-como-cadastrar-security-score/checkboxes-cadastro.png';
import EmailConfirmacaoCadastro from './posts/1-como-cadastrar-security-score/email-confirmacao-cadastro.png';
import SenhaCadastro from './posts/1-como-cadastrar-security-score/criacao-senha.png';
import TelaLogin from './posts/1-como-cadastrar-security-score/tela-login.png';

const TutorialContainer = customStyled('div', {
  maxWidth: '800px',
  margin: '0 auto',

  '.video-container': {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },

  '.post-title': {
    margin: '10px 0',
    fontSize: '2.2rem',
  },

  '.screenshot': {
    maxWidth: '100%',
  },

  '.content': {
    'p, h3': {
      lineHeight: '2rem',

      '&, img': {
        marginTop: 20,
        marginBottom: 20,
      },
    },

    p: {
      fontSize: '1.1rem',
    },

    h3: {
      fontSize: '1.5rem',
    },

    li: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    '.campos-cadastro, .checkboxes-cadastro': {
      width: 500,
    },
  },

  '.post-numbers': {
    display: 'flex',
    gap: 10,
    fontSize: '0.8rem',
  },

  '.signup-steps': {
    marginLeft: 20,
  },

  '.post-tags': {
    marginBottom: 10,

    span: {
      border: '2px solid gray',
      borderRadius: '15px',
      padding: '5px 15px',
    },
  },
});

export function Tutorials(): JSX.Element {
  const language = useAtomValue(siteLanguageAtom);
  const copy = useCopy();

  return (
    <TutorialContainer>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OMYT5nxv5i4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <h2 className="post-title">
        {language === 'pt'
          ? 'Como criar sua conta no GAT Security Score'
          : 'How to create an account for GAT Security Score'}
      </h2>
      <h5>Ivã Munhoz</h5>
      <div className="post-numbers">
        <p>10min</p>
        <p>{language === 'pt' ? '12/08/23' : '08/12/23'}</p>
      </div>
      <TutorialControlBar />
      <div className="content">
        <h3>
          {language === 'pt'
            ? 'O que é o GAT security Score'
            : 'What is GAT Security Score'}
        </h3>

        <p>
          {language === 'pt'
            ? 'A plataforma GAT Security Score é uma ferramenta que cria um painel\
             gerencial capaz de exibir diversas informações essenciais para a análise\
              e o controle do potencial de defesa de um domínio contra ataques maliciosos.'
            : "GAT Security score is a tool that sets up a dashboard that can show several\
             essential pieces of information for analysis and control of a domain's\
              deffences against malicious attacks."}
        </p>

        <img
          src={DashboardScreenshot}
          alt=""
          className="dashboard screenshot"
        />
        <h3>
          {language === 'pt'
            ? 'Passos para criar uma conta no GAT security Score'
            : 'Steps to create a new account for GAT Security Score'}
        </h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={
              language === 'pt'
                ? 'https://www.youtube.com/embed/n0-FsQ5Kqp4'
                : 'https://www.youtube.com/embed/Lgc8tnsrjQs'
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <ul className="signup-steps">
          <li>
            <p>
              {language === 'pt' ? 'Acesse ' : 'Go to '}
              <Link
                to="https://www.securityscore.com.br"
                className="external-link"
              >
                https://www.securityscore.com.br
              </Link>
              {language === 'pt'
                ? ' e depois clique no botão '
                : ' then click the button '}
              <strong>Comece Grátis </strong>
              {language === 'pt' ? 'na barra superior' : 'on the top bar '}:
            </p>
            <img
              src={BotaoComeceGratiscreenshot}
              alt=""
              className="comece-gratis screenshot"
            />
          </li>
          <li>
            <p>
              {language === 'pt'
                ? 'Na próxima página, preencha os 5 campos obrigatórios\
                 (Nome, Sobrenome, E-mail corporativo, Cargo e Nome da empresa)\
                  e o campo opcional Telefone, caso desejar:'
                : 'On the next page, fill in the 5 mandatory fields\
                 (Nome, Sobrenome, E-mail corporativo, Cargo e Nome da empresa)\
                  and the optional field Telefone, if you wish:'}
            </p>
            <img
              src={CamposCadastro}
              alt=""
              className="campos-cadastro screenshot"
            />
          </li>
          <li>
            <p>
              {language === 'pt'
                ? 'Depois, leia e confirme a leitura do termo de Política de Privacidade,\
                   e se quiser confirme que deseja receber e-mails sobre o Security Score e o GAT.\
                    Finalmente, clique no botão Enviar'
                : 'Then, read and confirm the reading of the terms about Privacy Policy,\
                  and if you want, confirm that you wish to receive e-mails about Security Score and about GAT.\
                  Finally, click the button Enviar'}
              :
            </p>
            <img
              src={CheckboxesCadastro}
              alt=""
              className="checkboxes-cadastro screenshot"
            />
            <p>
              {language === 'pt'
                ? 'Aguarde o processo acabar, o que pode tomar alguns segundos. Quando surgir a mensagem '
                : 'Wait for the process to finish, which can take a few seconds. When you see the message '}
              <strong>
                "Cadastro realizado com sucesso! Você receberá um email no
                endereço informado"
              </strong>
              ,
              {language === 'pt'
                ? ' você terá recebido um e-mail solicitando a confirmação do cadastro. No corpo deste e-mail, clique no botão '
                : ' you will have received an e-mail asking for the signup confirmation. In the e-mail body, click the button '}
              <strong>Criar senha:</strong>
            </p>
            <img
              src={EmailConfirmacaoCadastro}
              alt=""
              className="email-confirmacao-cadastro screenshot"
            />
          </li>
          <li>
            <p>
              {language === 'pt'
                ? 'Na página que foi aberta, crie e repita sua senha de acesso. Lembre-se de usar uma senha única e forte.\
                 Então, clique no botão '
                : 'On the opened page, create and repeat your access password. Remember to use a strong and unique password.\
                 Then, click the button '}
              <strong>Save</strong>:
            </p>
            <img
              src={SenhaCadastro}
              alt=""
              className="senha-cadastro screenshot"
            />
          </li>
          <li>
            <p>
              {language === 'pt'
                ? 'Assim que criar a senha, você será levado para a página de login, que é bem semelhante à de criação.\
                 Insira seu username, que é o e-mail corporativo usado cadastro, insira sua senha e clique no botão '
                : 'When you finish creating the password, you will be taken to the login page, which is very similar to the previous one.\
                Insert your username, which is the corporative e-mail that was fill in the signup process, your password, then clique the button '}
              <strong>Log In</strong>:
            </p>
            <img src={TelaLogin} alt="" className="tela-login screenshot" />
          </li>
          <li>
            <p>
              {language === 'pt'
                ? 'E é isso. Ao logar, você será direcionado ao painel.\
                 Aguarde um tempo enquanto as ferramentas do GAT analisam sua rede,\
                  e ao fim do processo, você terá acesso às informações iguais aos do screenshot do começo deste artigo: '
                : "And that's all. When you login, you will be redirected to the dashboard.\
                Wait until the GAT tools finish analysing your network,\
                and at the end of the process, you will have access to the same information of the screenshot in the beginning of this post: "}
            </p>
            <img
              src={DashboardScreenshot}
              alt=""
              className="dashboard screenshot"
            />
          </li>
          <li>
            <p>
              {language === 'pt'
                ? 'Seguindo estes passos, você terá criado sua conta com sucesso. Caso encontre algum problema,\
                 tenha ficado com alguma dúvida ou queira fazer alguma sugestão, entre em contato conosco pela página '
                : 'Following these steps, you will have created your account successfully. In case you find any problems,\
                or if you got any questions or wish to offer some suggestions, feel free to get in touch with us in the page '}
              <Link to="/contact">
                <strong>{copy.linkContact}</strong>
              </Link>
              .
            </p>
          </li>
        </ul>
      </div>

      <div className="post-tags">
        <span>{language === 'pt' ? 'Como-fazer' : 'How-to'}</span>
      </div>
      <TutorialControlBar />
    </TutorialContainer>
  );
}
