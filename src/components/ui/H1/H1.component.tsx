import { FC } from 'react';

import styles from './H1.module.scss';
import { H1_SIZE, H1Props } from './H1.types';

const H1: FC<H1Props> = ({ className, children, size = H1_SIZE.default, ...otherProps }): JSX.Element => (
  <h1 className={`${className} ${size === H1_SIZE.big ? styles.bigH1 : styles.defaultH1}`} {...otherProps}>
    {children}
  </h1>
);

H1.displayName = 'H1';

export default H1;
