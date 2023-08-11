import { Link, useLocation } from 'react-router-dom';
import { usePageRoutes } from 'src/pages';

export function PageLinks(): JSX.Element {
  const { pageRoutes } = usePageRoutes();
  const location = useLocation();

  return (
    <ul>
      {pageRoutes
        .filter((route) => route.path !== '/tests')
        .map(
          (route) =>
            !route.disabled && (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={
                    route.path === location.pathname
                      ? 'selected-route'
                      : undefined
                  }
                >
                  {route.label}
                </Link>
              </li>
            ),
        )}
    </ul>
  );
}
