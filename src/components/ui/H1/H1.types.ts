import { HTMLAttributes } from 'react'

export enum H1_CLASSES {
	default,
	big,
}

export type H1Props = {
	H1Type?: H1_CLASSES
} & HTMLAttributes<HTMLElement>
