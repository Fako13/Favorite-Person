import 'swiper/css';
import 'swiper/css/virtual';

import { FC } from 'react';
import { Navigation, Pagination, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Character } from '../../../services/types/Character';
import CharacterCard from '../Card/CharacterCard.component';
import { ReactComponent as Arrow } from './arrow.svg';
import styles from './CharacterSlider.module.scss';

interface CharacterSliderType {
  characters: Character[];
}

const CharacterSlider: FC<CharacterSliderType> = ({ characters }): JSX.Element => (
  <div className={styles.container}>
    <Swiper
      modules={[Virtual, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{
        nextEl: `.${styles.arrowRight}`,
        prevEl: `.${styles.arrowLeft}`,
      }}
      pagination={{
        enabled: true,
        el: `.${styles.pagination}`,
        clickable: true,
        bulletClass: `${styles.bullet}`,
        bulletActiveClass: `${styles.bulletActive}`,
      }}
      virtual={true}
    >
      {characters.map((character) => (
        <SwiperSlide key={character.id} virtualIndex={character.id}>
          <CharacterCard character={character} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className={styles.navigationContainer}>
      <div className={styles.arrowLeft}>
        <Arrow />
      </div>
      <div className={styles.pagination} />
      <div className={styles.arrowRight}>
        <Arrow />
      </div>
    </div>
  </div>
);

export default CharacterSlider;
