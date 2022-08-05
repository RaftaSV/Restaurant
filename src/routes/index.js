import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import { ROUTES } from 'config';
import NotFound from 'pages/404';
import SpecialPlatters from 'pages/SpecialPlatters'
import Main from '../pages/Main';
import Breakfast from '../pages/Breakfast';
import Chicken from '../pages/Chicken';
import Rice from '../pages/Rice';
import TypicalPlatters from '../pages/TypicalPlatters';
import SeaFood from '../pages/SeaFood';
import Soups from 'pages/Soups';
import KidsMenu from '../pages/KidsMenu';
import Beverages from '../pages/Beverages';
const Routes = () => {
  return (
      <BrowserRouter>
        <ReactRoutes>
            <Route path={ROUTES.MAIN.absolutePath} element={<Main />} />
            <Route path={ROUTES.SPECIAL.absolutePath} element={<SpecialPlatters />} />
             <Route path={ROUTES.BREAKFAST.absolutePath} element={<Breakfast />} />
            <Route path={ROUTES.CHICKEN.absolutePath} element={<Chicken />} />
            <Route path={ROUTES.RICE.absolutePath} element={<Rice />} />
            <Route path={ROUTES.TYPICAL.absolutePath} element={<TypicalPlatters />} />
            <Route path={ROUTES.SEAFOOD.absolutePath} element={<SeaFood />} />
           <Route path={ROUTES.SOUPS.absolutePath} element={<Soups />} />
            <Route path={ROUTES.KIDS.absolutePath} element={<KidsMenu />} />
            <Route path={ROUTES.BEVERAGES.absolutePath} element={<Beverages />} />
            <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </BrowserRouter>
  );
};

export default Routes;
