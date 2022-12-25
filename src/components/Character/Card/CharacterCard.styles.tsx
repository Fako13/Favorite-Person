import styled from 'styled-components'

interface BodyType {
	background: string
	color: string
}
interface TitleType {
	color: string
}

export const Card = styled.div`
	position: relative;
	overflow: hidden;
	cursor: pointer;
	border-radius: 6px;
`

export const Header = styled.div`
	position: relative;
	overflow: hidden;
	background: #000;
	min-height: 395px;
`
export const Title = styled.h2<TitleType>`
	font-weight: 500;
	font-size: 36px;
	white-space: pre-line;
	line-height: 1.39;
	position: absolute;
	margin: 0;
	left: 13px;
	color: ${({ color }) => color};
	bottom: 21px;
`
export const Body = styled.div<BodyType>`
	background: ${({ background }) => background};
	color: ${({ color }) => color};
	font-size: 18px;
	padding: 20px 15px;
`

export const BodyElement = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	flex-wrap: wrap;
	padding: 7px 0;

	& + & {
		border-top: 1px solid #fff;
	}
`
