import LoadableImage from '../../components/LoadableImage/LoadableImage.component'
import H1 from '../../components/ui/H1/H1.component'
import Wrapper from '../../components/ui/Wrapper/Wrapper.component'
import { CharacterPageContainer } from './character.styles'
import Bg from './bg.png'

const CharacterPage = (): JSX.Element => {
	return (
		<CharacterPageContainer>
			<LoadableImage background={true} src={Bg} />
			<Wrapper position="relative">
				<H1>Список персонажей</H1>
			</Wrapper>
		</CharacterPageContainer>
	)
}

export default CharacterPage
