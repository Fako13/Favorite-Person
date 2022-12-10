import { BaseNavigate } from './ButtonNavigate.styles'
import { FC } from 'react'
import { BUTTON_SIZE, BUTTON_COLOR } from '../Button/Button.types'
import { ButtonNavigateProps } from './ButtonNavigate.types'

const ButtonNavigate: FC<ButtonNavigateProps> = ({
	children,
	size = BUTTON_SIZE.default,
	color = BUTTON_COLOR.default,
	...otherProps
}): JSX.Element => {
	return (
		<BaseNavigate size={size} color={color} {...otherProps}>
			{children}
		</BaseNavigate>
	)
}

ButtonNavigate.displayName = 'Button'

export default ButtonNavigate
