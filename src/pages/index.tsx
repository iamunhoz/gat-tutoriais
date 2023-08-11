/**
 * criar pagina de erro de rota
 */
import useCopy from 'src/state/copy';
import { isLocalHost } from 'src/assets/utils';
import { RouteObject } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { Tests } from './Tests';

const usePageRoutes = () => {
  const copy = useCopy();
  const pageRoutes: (RouteObject & {
    disabled: boolean;
    label: string;
    path: string;
  })[] = [
    {
      path: '/',
      element: <Home />,
      disabled: false,
      label: copy.linkHome,
    },
    {
      path: '/about',
      element: <About />,
      disabled: false,
      label: copy.linkAbout,
    },
    {
      path: '/projects',
      element: <Projects />,
      disabled: false,
      label: copy.linkProjects,
    },
    {
      path: '/contact',
      element: <Contact />,
      disabled: false,
      label: copy.linkContact,
    },
    {
      path: '/blog/:article?',
      element: <Blog />,
      disabled: false,
      label: copy.linkBlog,
    },
    {
      path: '/tests',
      element: <Tests />,
      disabled: !isLocalHost(),
      label: 'Tests',
    },
  ];

  return { pageRoutes };
};

export { usePageRoutes };
