import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import { ROUTES } from 'config';
import NotFound from 'pages/404';
import Main from 'pages/Main';


const Routes = () => {
  return (
      <BrowserRouter>
        <ReactRoutes>
            <Route path={ROUTES.MAIN.absolutePath} element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </BrowserRouter>
  );
};

export default Routes;
