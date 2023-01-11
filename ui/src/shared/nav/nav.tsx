import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <Link to='/'>All Recipes</Link>
      <Link to='/book'>Your Own Recipes</Link>
      <Link to='/login'>Login</Link>
      <Link to='/'>New Recipe</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/recipes/:id'>Recipe</Link>
      <Link to='/'>Dev</Link>
    </nav>
  );
}
