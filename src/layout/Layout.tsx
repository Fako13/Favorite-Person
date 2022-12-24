import { ReactNode } from 'react';

import Header from '../components/base/Header/Header.component';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children?: ReactNode }): JSX.Element => (
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
