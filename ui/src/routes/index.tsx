import { createBrowserRouter } from 'react-router-dom';
import { RecipeBook, EditRecipe, Index, Login, NewRecipe, Profile, Recipe } from '../features';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'recipes',
    element: <RecipeBook />,
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
    path: 'recipes/:id',
    element: <Recipe />,
  },
  {
    path: 'recipes/:id/edit',
    element: <EditRecipe />,
  },
  {
    path: 'recipes/new',
    element: <NewRecipe />,
  },
]);
