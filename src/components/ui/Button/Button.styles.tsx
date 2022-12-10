import styled, { css } from 'styled-components'
import { ButtonProps, BUTTON_SIZE, BUTTON_COLOR } from './Button.types'
import { ButtonDefaultColor, ButtonGreenColor, TextColor } from '../../../assets/styles/colors'

export const DefaultSizeButton = `
	font-size: 18px;
	min-width: 140px;
	padding: 0 20px;
	height: 55px;

`
export const SmallSizeButton = `
	font-size: 14px;
	min-width: 85px;
	padding: 0 20px;
	height: 30px;
`
export const LargeSizeButton = `
	font-size: 20px;
	min-width: 180px;
	padding: 0 20px;
	height: 60px;
`

export const DefaultColorButton = `
	background: ${ButtonDefaultColor.default};
	color: ${TextColor.default};
	&:hover {
		background: ${ButtonDefaultColor.hover};
	}
	&:active {
		background: ${ButtonDefaultColor.pressed};
	}
`
export const GreenColorButton = `
	background: ${ButtonGreenColor.default};
	color: ${TextColor.secondary};
	&:hover {
		background: ${ButtonGreenColor.hover};
	}
	&:active {
		background: ${ButtonGreenColor.pressed};
	}
`
export const BaseButtonStyles = `
	display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.3;
	cursor: pointer;
	transition: 0.3s;
	border-radius: 8px;
	text-align: center;
	font-family: lora;
`

export const BaseButtonSizeAndColor = css<ButtonProps>`
	${BaseButtonStyles}

	${({ size }) =>
		size === BUTTON_SIZE.small
			? SmallSizeButton
			: size === BUTTON_SIZE.large
			? LargeSizeButton
			: DefaultSizeButton}

	${({ color }) => (color === BUTTON_COLOR.green ? GreenColorButton : DefaultColorButton)}
`

export const BaseButton = styled.button`
	${BaseButtonSizeAndColor}
`
export const BaseLink = styled.a`
	${BaseButtonSizeAndColor}
`
