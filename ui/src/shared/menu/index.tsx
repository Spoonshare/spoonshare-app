import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav>
      <Link to='/'>All Recipes</Link>
      <Link to='book'>Your Own Recipes</Link>
      <Link to='login'>Login</Link>
      <Link to='/'>New Recipe</Link>
      <Link to='/'>Profile</Link>
      <Link to='/'>Recipe</Link>
      <Link to='/'>Dev</Link>
    </nav>
  );
}
