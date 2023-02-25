import navlinks from '@/data/navlinks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  NavTitle,
  MenuContainer,
  NavContainer,
  Links,
  ThemeToggleContainer,
} from './Nav.style';

export default function Nav() {
  const router = useRouter();
  console.log(router);

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
        <Link href={'/'}>
          <NavTitle>Devlog</NavTitle>
        </Link>

        <MenuContainer>
          <Links>
            <ul>
              {navlinks.map((nav) => (
                <li
                  key={nav.title}
                  data-selected={
                    router.pathname.includes(nav.link) ? 'true' : 'false'
                  }
                >
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
                width='18'
                height='18'
                viewBox='0 0 312.812 312.812'
              >
                <path d='M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4    c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4    c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4    c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z'></path>
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
