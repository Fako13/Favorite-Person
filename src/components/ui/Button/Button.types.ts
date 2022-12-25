import { HTMLAttributes, LinkHTMLAttributes } from 'react'

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
	size?: BUTTON_SIZE
	color?: BUTTON_COLOR
}

export type ButtonProps = {} & ButtonBaseProps &
	HTMLAttributes<HTMLButtonElement> &
	LinkHTMLAttributes<HTMLLinkElement>
