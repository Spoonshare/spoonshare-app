import { createBrowserRouter } from 'react-router-dom';
import { Book, EditRecipe, Index, Login, NewRecipe, Profile, Recipe } from '../features';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'book',
    element: <Book />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'recipe/:id',
    element: <Recipe />,
  },
  {
    path: 'recipe/:id/edit',
    element: <EditRecipe />,
  },
  {
    path: 'recipe/new',
    element: <NewRecipe />,
  },
]);
