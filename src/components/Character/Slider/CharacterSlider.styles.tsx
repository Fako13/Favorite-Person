import styled, { css } from 'styled-components'
import { TextColor } from '../../../assets/styles/colors'

export const SliderContainer = styled.div`
	position: relative;
`
export const SliderPagination = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px 45px;

	.swiper-pagination-bullet {
		height: 10px;
		display: block;
		cursor: pointer;
		width: 10px;
		background: ${TextColor.white};
		border-radius: 50%;
		&.swiper-pagination-bullet-active {
			background: ${TextColor.secondary};
		}
	}
`
export const SliderNavigationContainer = styled.div`
	position: relative;
	margin-top: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 40px;
`

const SliderArrow = css`
	height: 24.092px;
	width: 12.046px;
	cursor: pointer;
	&:hover path {
		stroke: ${TextColor.white};
	}
`
export const SliderArrowLeft = styled.div`
	${SliderArrow};
`
export const SliderArrowRight = styled.div`
	${SliderArrow};
	transform: rotate(-180deg);
`
