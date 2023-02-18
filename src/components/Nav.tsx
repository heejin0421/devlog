import navlinks from '@/data/navlinks';
import Link from 'next/link';
import { MenuContainer, NavContainer } from './Nav.style';

export default function Nav() {
  return (
    <NavContainer>
      <div className='container'>
        <h1>devlog</h1>
        <MenuContainer>
          {navlinks.map((nav) => (
            <Link href={nav.link} key={nav.title}>
              {nav.title}
            </Link>
          ))}
          <div>dark</div>
        </MenuContainer>
      </div>
    </NavContainer>
  );
}
