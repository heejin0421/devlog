import navlinks from '@/data/navlinks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  NavTitle,
  MenuContainer,
  NavContainer,
  Links,
  ThemeToggleContainer,
} from './Nav.style';

export default function Nav() {
  const [themeMode, setThemeMode] = useState<string>(
    document.body.dataset.theme!
  );

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const themeModeHandler = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <NavContainer>
      <div className='container'>
        <NavTitle>devlog</NavTitle>
        <MenuContainer>
          <Links>
            <ul>
              {navlinks.map((nav) => (
                <li key={nav.title}>
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </Links>
          <ThemeToggleContainer
            className={themeMode}
            onClick={themeModeHandler}
          >
            {themeMode === 'dark' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='18'
                height='18'
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path d='M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='18'
                height='18'
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path d='M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z' />
              </svg>
            )}
          </ThemeToggleContainer>
        </MenuContainer>
      </div>
    </NavContainer>
  );
}
