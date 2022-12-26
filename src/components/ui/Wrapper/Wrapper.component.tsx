import { FC } from 'react';

import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.types';

const Wrapper: FC<WrapperProps> = ({ children, position, className, size, ...otherProps }): JSX.Element => (
  <div
    className={`${size === 'xl' ? styles.xl : styles.l} ${
      position === 'absolute' ? 'absolute' : position === 'relative' ? 'relative' : ''
    } ${className ? className : ''} ${styles.base}`}
    {...otherProps}
  >
    {children}
  </div>
);

Wrapper.displayName = 'Wrapper';

export default Wrapper;
