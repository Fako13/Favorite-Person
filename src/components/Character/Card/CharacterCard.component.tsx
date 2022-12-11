import { FC } from 'react'
import { Character } from '../../../services/types/Character'
import LoadableImage from '../../LoadableImage/LoadableImage.component'
import { Body, Card, Header, Title, BodyElement } from './CharacterCard.styles'

interface CharacterCardType {
	character: Character
}

const CharacterCard: FC<CharacterCardType> = ({ character }): JSX.Element => {
	const {
		name,
		nameHtml,
		gender,
		species,
		side,
		photo,
		colorName,
		colorBackgroundParametrs,
		colorParametrs,
	} = character
	return (
		<Card>
			<Header>
				{photo != null && photo.length > 0 && <LoadableImage src={photo} />}
				<Title color={colorName}>{nameHtml.length > 0 ? nameHtml : name}</Title>
			</Header>
			<Body background={colorBackgroundParametrs} color={colorParametrs}>
				<BodyElement>
					<span>Пол</span>
					<span>{gender}</span>
				</BodyElement>
				<BodyElement>
					<span>Раса</span>
					<span>{species}</span>
				</BodyElement>
				<BodyElement>
					<span>Сторона</span>
					<span>{side}</span>
				</BodyElement>
			</Body>
		</Card>
	)
}

export default CharacterCard
