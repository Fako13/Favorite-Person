import { HTMLAttributes } from 'react'

export type ILoadableImageTypes = {
	src: string
	alt?: string
	onLoad?: () => void
} & HTMLAttributes<HTMLElement>
