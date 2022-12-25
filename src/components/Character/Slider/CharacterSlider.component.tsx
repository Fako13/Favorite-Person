import { FC } from 'react'
import { Character } from '../../../services/types/Character'
import CharacterCard from '../Card/CharacterCard.component'
import { Slider } from './CharacterSlider.styles'

interface CharacterSliderType {
	characters: Character[]
}

const CharacterSlider: FC<CharacterSliderType> = ({ characters }): JSX.Element => {
	return (
		<Slider>
			{characters.map((character, i) => (
				<CharacterCard key={i} character={character} />
			))}
		</Slider>
	)
}

export default CharacterSlider
