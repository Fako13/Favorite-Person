import { BaseButton, BaseLink } from './Button.styles'
import { FC } from 'react'
import { ButtonProps, BUTTON_SIZE, BUTTON_COLOR } from './Button.types'

const Button: FC<ButtonProps> = ({
	children,
	size = BUTTON_SIZE.default,
	color = BUTTON_COLOR.default,
	...otherProps
}): JSX.Element => {
	const Tag = (
		otherProps.href !== undefined && otherProps.href.length > 0 ? BaseLink : BaseButton
	) as React.ElementType
	return (
		<Tag size={size} color={color} {...otherProps}>
			{children}
		</Tag>
	)
}

Button.displayName = 'Button'

export default Button
