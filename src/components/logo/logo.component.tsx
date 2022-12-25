import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';
import PngLogo from './logo.png';

const Logo = (): JSX.Element => (
  <Link href="/" passHref>
    <a className={styles.logoLink}>
      <Image alt="" sizes="100%" objectPosition="relative" objectFit="contain" src={PngLogo}></Image>
    </a>
  </Link>
);

export default Logo;
