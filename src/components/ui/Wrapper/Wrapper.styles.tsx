import styled, { css } from 'styled-components'
import { WrapperProps } from './Wrapper.types'
import { device } from '../../../assets/styles/media'

const ContainerXL = `
	max-width: 1470px;
`
const ContainerL = `
	max-width: 1270px;
`

export const BaseWrapper = styled.div<WrapperProps>`
	padding: 0 40px;
	margin-left: auto;
	box-sizing: content-box;
	margin-right: auto;
	width: 100%;

	${({ size }) => (size === 'xl' ? ContainerXL : ContainerL)}

	${({ position }) =>
		position === 'relative'
			? css`
					position: relative;
			  `
			: position === 'absolute'
			? css`
					position: absolute;
			  `
			: css`
					position: static;
			  `}

	@media ${device.laptop} {
		padding: 0 30px;
	}

	@media ${device.mobileL} {
		padding: 0 15px;
	}
`
