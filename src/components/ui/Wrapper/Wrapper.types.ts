import { HTMLAttributes } from 'react'

export type WrapperProps = {
	size?: 'xl' | 'l'
} & HTMLAttributes<HTMLDivElement>
