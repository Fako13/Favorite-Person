import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../Logo/Logo.component';
import P from '../../ui/P/P.component';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav className={styles.navContainer}>
        <P>
          <Link passHref href="/">
            <a className={`${router.pathname == '/' ? styles.navLinkActive : ''} ${styles.navLink}`}>Главная</a>
          </Link>
        </P>
        <P>
          <Link passHref href="/character">
            <a className={`${router.pathname == '/character' ? styles.navLinkActive : ''} ${styles.navLink}`}>
              Персонажи
            </a>
          </Link>
        </P>
        <P>
          <Link passHref href="/ui">
            <a className={`${router.pathname == '/ui' ? styles.navLinkActive : ''} ${styles.navLink}`}>UI</a>
          </Link>
        </P>
      </nav>
    </header>
  );
};

export default Header;
