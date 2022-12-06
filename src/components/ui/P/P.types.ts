import { HTMLAttributes } from 'react'

export type PProps = {
	size?: 24 | 20 | 18 | 16 | 14 | 9
} & HTMLAttributes<HTMLParagraphElement>
