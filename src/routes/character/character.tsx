import LoadableImage from '../../components/LoadableImage/LoadableImage.component'
import Wrapper from '../../components/ui/Wrapper/Wrapper.component'
import { CharacterPageContainer } from './character.styles'
import Bg from './bg.png'
import { DataCharacters } from '../../services/mocks/Characters'
import CharacterSlider from '../../components/Character/Slider/CharacterSlider.component'

const CharacterPage = (): JSX.Element => {
	return (
		<CharacterPageContainer>
			<LoadableImage background={true} src={Bg} />
			<Wrapper position="relative">
				<CharacterSlider characters={DataCharacters} />
			</Wrapper>
		</CharacterPageContainer>
	)
}

export default CharacterPage
