import { HTMLAttributes } from 'react'

export type ILoadableImageTypes = {
	src: string
	alt?: string
	background?: boolean
	onLoad?: () => void
} & HTMLAttributes<HTMLElement>
