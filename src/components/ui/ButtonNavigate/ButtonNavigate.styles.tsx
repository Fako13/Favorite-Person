import styled from 'styled-components'
import { BUTTON_COLOR, BUTTON_SIZE } from '../Button/Button.types'
import { ButtonNavigateProps } from './ButtonNavigate.types'
import {
	BaseButtonStyles,
	SmallSizeButton,
	LargeSizeButton,
	DefaultSizeButton,
	GreenColorButton,
	DefaultColorButton,
} from '../Button/Button.styles'
import { Link } from 'react-router-dom'

export const BaseNavigate = styled(Link)<ButtonNavigateProps>`
	${BaseButtonStyles}

	${({ size }) =>
		size === BUTTON_SIZE.small
			? SmallSizeButton
			: size === BUTTON_SIZE.large
			? LargeSizeButton
			: DefaultSizeButton}

	${({ color }) => (color === BUTTON_COLOR.green ? GreenColorButton : DefaultColorButton)}
`
