import { BUTTON_SIZE } from '../../ui/Button/Button.types'
import { H1_SIZE } from '../../ui/H1/H1.types'
import Wrapper from '../../ui/Wrapper/Wrapper.component'
import { BannerContainer, ButtonLink, SubTitle, Title } from './MainBanner.styles'
import Logo from './MainBanner.png'
import LoadableImage from '../../LoadableImage/LoadableImage.component'

const MainBanner = (): JSX.Element => {
	return (
		<BannerContainer>
			<LoadableImage background={true} src={Logo} />
			<Wrapper size="xl" position="relative">
				<Title size={H1_SIZE.big}>
					Найди любимого персонажа <br /> “Гарри Поттера”
				</Title>
				<SubTitle size={24}>
					Вы сможете узнать тип героев, их <br /> способности, сильные стороны и недостатки.
				</SubTitle>
				<ButtonLink to="character" size={BUTTON_SIZE.large}>
					Начать
				</ButtonLink>
			</Wrapper>
		</BannerContainer>
	)
}

export default MainBanner
