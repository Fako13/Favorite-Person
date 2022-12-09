import { BUTTON_SIZE } from '../../ui/Button/Button.types'
import { H1_SIZE } from '../../ui/H1/H1.types'
import Wrapper from '../../ui/Wrapper/Wrapper.component'
import { BannerContainer, ButtonLink, SubTitle, Title, Background } from './MainBanner.styles'
import Logo from '../../Logo/logo.png'

const MainBanner = (): JSX.Element => {
	return (
		<BannerContainer>
			<Background src={Logo} />
			<Wrapper>
				<Title size={H1_SIZE.big}>Найди любимого персонажа “Гарри Поттера”</Title>
				<SubTitle size={24}>
					Вы сможете узнать тип героев, их <br /> способности, сильные стороны и недостатки.
				</SubTitle>
				<ButtonLink size={BUTTON_SIZE.large}>Начать</ButtonLink>
			</Wrapper>
		</BannerContainer>
	)
}

export default MainBanner
