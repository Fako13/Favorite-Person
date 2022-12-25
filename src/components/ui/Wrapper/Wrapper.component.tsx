import { BaseWrapper } from './Wrapper.styles'
import { FC } from 'react'
import { WrapperProps } from './Wrapper.types'

const Wrapper: FC<WrapperProps> = ({ children, size, ...otherProps }): JSX.Element => {
	return (
		<BaseWrapper size={size} {...otherProps}>
			{children}
		</BaseWrapper>
	)
}

Wrapper.displayName = 'Wrapper'

export default Wrapper
