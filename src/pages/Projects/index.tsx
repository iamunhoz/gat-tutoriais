/**
 * receita: destacar
 *  simple-tree
 *    front-end;
 *    back-end;
 *  e-commerce
 *  jogos & 3js
 *
 *
 */

import { customStyled } from 'src/assets/utils/stitches';
import simpleTreeFrontendScreenshot from 'src/assets/images/simple-tree-frontend.png';
import analogClockFrontendScreenshot from 'src/assets/images/analog-clock.png';
import anacondinhaFrontendScreenshot from 'src/assets/images/anacondinha.png';
import catalogodigitalFrontendScreenshot from 'src/assets/images/catalogo-digital.png';
import { ProjectCard } from './ProjectCard';

type ProjectData = {
  imgSrc: string;
  imgAlt: string;
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  githubLink?: string;
};

const projects: ProjectData[] = [
  {
    imgSrc: simpleTreeFrontendScreenshot,
    imgAlt: simpleTreeFrontendScreenshot,
    projectTitle: 'TreeSimple',
    projectLink: 'https://treesimple.netlify.app',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt eius officiis voluptatum, perferendis nisi! Esse qui voluptatibus perspiciatis ex.',
  },
  {
    imgSrc: analogClockFrontendScreenshot,
    imgAlt: analogClockFrontendScreenshot,
    projectTitle: 'Analog Clock',
    projectLink: 'https://blissful-bhaskara-17fe90.netlify.app/',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt eius officiis voluptatum, perferendis nisi! Esse qui voluptatibus perspiciatis ex.',
  },
  {
    imgSrc: anacondinhaFrontendScreenshot,
    imgAlt: anacondinhaFrontendScreenshot,
    projectTitle: 'Anacondinha',
    projectLink: 'https://anacondinha.netlify.app/',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt eius officiis voluptatum, perferendis nisi! Esse qui voluptatibus perspiciatis ex.',
  },
  {
    imgSrc: catalogodigitalFrontendScreenshot,
    imgAlt: catalogodigitalFrontendScreenshot,
    projectTitle: 'Catalogo Digital',
    projectLink: 'https://sandbox.app.mercurioapp.com.br/#/meuNegocio/catalogo',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt eius officiis voluptatum, perferendis nisi! Esse qui voluptatibus perspiciatis ex.',
  },
];

const ProjectsPageStyle = customStyled('article', {
  h4: {
    fontWeight: 400,
  },

  overflowX: 'hidden',

  '.projects-thumbnails-container': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',

    '@lg': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    gap: 10,
  },
});

export default function Projects(): JSX.Element {
  return (
    <ProjectsPageStyle>
      <h1>Projects</h1>
      <h4>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        perferendis.
      </h4>
      <section className="projects-thumbnails-container">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.projectTitle} />
        ))}
      </section>
    </ProjectsPageStyle>
  );
}
