import styled from 'styled-components'
import { PProps } from './P.types'
import { device } from '../../../assets/styles/media'

export const BaseP = styled.p<PProps>`
	line-height: 1.67;
	margin: 0;
	font-size: ${({ size = 20 }) => size}px;

	@media ${device.laptop} {
		font-size: 10px;
	}
`
