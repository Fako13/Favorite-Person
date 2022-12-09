import styled from 'styled-components'
import LoadableImage from '../../LoadableImage/LoadableImage.component'
import Button from '../../ui/Button/Button.component'
import H1 from '../../ui/H1/H1.component'
import P from '../../ui/P/P.component'

export const BannerContainer = styled.div`
	min-height: 100%;
	padding: 40px 0 60px;
	display: flex;
	position: relative;
	align-items: center;
`
export const Title = styled(H1)`
	max-width: 711px;
`
export const SubTitle = styled(P)`
	margin: 65px 0;
	line-height: 1.3;
`
export const ButtonLink = styled(Button)``

export const Background = styled(LoadableImage)`
	object-fit: cover;
	width: 100%;
	height: 100%;
	position: absolute;
`
