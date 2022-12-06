import { BaseP } from './P.styles'
import { FC } from 'react'
import { PProps } from './P.types'

const P: FC<PProps> = ({ children, size, ...otherProps }): JSX.Element => {
	return (
		<BaseP size={size} {...otherProps}>
			{children}
		</BaseP>
	)
}

P.displayName = 'P'

export default P
