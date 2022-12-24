import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';
import PngLogo from './logo.png';

const Logo = (): JSX.Element => (
  <Link className={styles.logoLink} href="/" passHref>
    <a>
      <Image alt="" src={PngLogo}></Image>
    </a>
  </Link>
);

export default Logo;
