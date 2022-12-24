import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export enum BUTTON_SIZE {
  default = 'default',
  small = 'small',
  large = 'large',
}
export enum BUTTON_COLOR {
  default = 'default',
  green = 'green',
}

export interface ButtonBaseProps {
  Size?: BUTTON_SIZE;
  Color?: BUTTON_COLOR;
}

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    ButtonBaseProps {}
