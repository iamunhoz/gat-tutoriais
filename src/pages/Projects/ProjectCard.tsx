/**
 * mudar para:
 * 1. se clicar no card como um todo, abre a pagina que descreve o projeto com mais detalhes
 *    (ou modal)
 * 2. incluir dois links no lugar da arrow:
 *  a. "demo" -> leva para o deploy feito no netlify
 *  b. "github" -> leva para o repositóriodo projeto no github
 */

import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { customStyled } from 'src/assets/utils/stitches';

const ProjectCardStyle = customStyled(Link, {
  padding: 2,
  borderRadius: 5,
  img: {
    maxWidth: '100%',
  },
  border: '2px solid var(--accent-color)',

  h2: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  'svg, img': {
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionDelay: '0s',
  },

  '&:hover': {
    img: { transformOrigin: 'center', transform: 'scale(1.01)' },
    svg: {
      transform: 'rotate(-45deg)',
    },
  },
});

type ProjectCardProps = {
  imgSrc: string;
  imgAlt: string;
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
};
export function ProjectCard(props: ProjectCardProps): JSX.Element {
  const { imgSrc, imgAlt, projectTitle, projectLink, projectDescription } =
    props;
  return (
    <ProjectCardStyle to={projectLink}>
      <img src={imgSrc} alt={imgAlt} />
      <h2>
        {projectTitle}
        <ArrowRight />
      </h2>

      <p>{projectDescription}</p>
    </ProjectCardStyle>
  );
}
