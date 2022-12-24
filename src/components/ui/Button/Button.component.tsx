import { FC } from 'react';

import styles from './Button.module.scss';
import { BUTTON_COLOR, BUTTON_SIZE } from './Button.types';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
  children,
  className,
  Size = BUTTON_SIZE.default,
  Color = BUTTON_COLOR.default,
  ...otherProps
}): JSX.Element => (
  <button
    className={`${styles.baseButton} ${
      Size === BUTTON_SIZE.small ? styles.smallSize : Size === BUTTON_SIZE.large ? styles.largeSize : styles.defaultSize
    } ${Color === BUTTON_COLOR.green ? styles.greenColor : styles.defaultColor} ${className ? className : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

Button.displayName = 'Button';

export default Button;
