import { HTMLAttributes } from 'react'

export enum H1_SIZE {
	default = 'default',
	big = 'big',
}

export type H1Props = {
	size?: H1_SIZE
} & HTMLAttributes<HTMLElement>
