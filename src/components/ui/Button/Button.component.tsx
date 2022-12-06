import { BaseButton } from './Button.styles'
import { FC } from 'react'
import { ButtonProps, BUTTON_SIZE, BUTTON_COLOR } from './Button.types'

const Button: FC<ButtonProps> = ({
	children,
	size = BUTTON_SIZE.default,
	color = BUTTON_COLOR.default,
	...otherProps
}): JSX.Element => {
	return (
		<BaseButton size={size} color={color} {...otherProps}>
			{children}
		</BaseButton>
	)
}

Button.displayName = 'Button'

export default Button
