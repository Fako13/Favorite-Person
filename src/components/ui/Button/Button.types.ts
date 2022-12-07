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

export type ButtonProps = {
	size?: BUTTON_SIZE
	color?: BUTTON_COLOR
} & HTMLAttributes<HTMLButtonElement> &
	LinkHTMLAttributes<HTMLLinkElement>
