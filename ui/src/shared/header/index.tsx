import { Menu } from '../menu';
import { Title } from '../title';
import './index.module.scss';

export function Header() {
  return (
    <header>
      <Title />
      <Menu />
    </header>
  );
}
