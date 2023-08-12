import useCopy from 'src/state/copy';
import { RouteObject } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import { Tutorials } from './Tutorials';

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
      path: '/tutoriais',
      element: <Tutorials />,
      disabled: false,
      label: copy.linkTutorials,
    },
    {
      path: '/contact',
      element: <Contact />,
      disabled: false,
      label: copy.linkContact,
    },
  ];

  return { pageRoutes };
};

export { usePageRoutes };
