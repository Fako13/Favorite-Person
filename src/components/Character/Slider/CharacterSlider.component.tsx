// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual, Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'

import { FC } from 'react'
import { Character } from '../../../services/types/Character'
import CharacterCard from '../Card/CharacterCard.component'
import {
	SliderContainer,
	SliderPagination,
	SliderNavigationContainer,
	SliderArrowLeft,
	SliderArrowRight,
} from './CharacterSlider.styles'

import Arrow from './arrow.svg'

interface CharacterSliderType {
	characters: Character[]
}

const CharacterSlider: FC<CharacterSliderType> = ({ characters }): JSX.Element => {
	return (
		<SliderContainer>
			<Swiper
				modules={[Virtual, Pagination, Navigation]}
				spaceBetween={20}
				slidesPerView={3}
				navigation={{
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					nextEl: `.${SliderArrowRight.styledComponentId}`,
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					prevEl: `.${SliderArrowLeft.styledComponentId}`,
				}}
				pagination={{
					enabled: true,
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					el: `.${SliderPagination.styledComponentId}`,
					clickable: true,
				}}
				virtual={true}
			>
				{characters.map((character) => (
					<SwiperSlide key={character.id} virtualIndex={character.id}>
						<CharacterCard character={character} />
					</SwiperSlide>
				))}
			</Swiper>
			<SliderNavigationContainer>
				<SliderArrowLeft>
					<Arrow />
				</SliderArrowLeft>
				<SliderPagination />
				<SliderArrowRight>
					<Arrow />
				</SliderArrowRight>
			</SliderNavigationContainer>
		</SliderContainer>
	)
}

export default CharacterSlider
