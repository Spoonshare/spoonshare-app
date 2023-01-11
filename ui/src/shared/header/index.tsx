import { Nav } from '../nav/nav';
import { Title } from '../title/title';
import './index.module.scss';

export function Header() {
  return (
    <header>
      <Title />
      <Nav />
    </header>
  );
}
