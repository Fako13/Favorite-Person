import { HTMLAttributes } from 'react'

export type WrapperProps = {
	size?: 'xl' | 'l'
	position?: 'relative' | 'absolute'
} & HTMLAttributes<HTMLDivElement>
