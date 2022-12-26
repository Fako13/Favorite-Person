import { FC } from 'react';

import { PProps } from './P.types';

const P: FC<PProps> = ({ children, className, size, ...otherProps }): JSX.Element => (
  <p className={`${size ? 'font-size-' + size : 'font-size-16'} ${className ? className : ''}`} {...otherProps}>
    {children}
  </p>
);

P.displayName = 'P';

export default P;
