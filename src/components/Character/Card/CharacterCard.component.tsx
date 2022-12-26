import Image from 'next/image';
import { FC } from 'react';

import { Character } from '../../../services/types/Character';
import styles from './CharacterCard.module.scss';

interface CharacterCardType {
  character: Character;
}

const CharacterCard: FC<CharacterCardType> = ({ character }): JSX.Element => {
  const { name, nameHtml, gender, species, side, photo, colorName, colorBackgroundParametrs, colorParametrs } =
    character;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {photo != null && photo.length > 0 && <Image alt="photo" layout="fill" src={photo} />}
        <h2 className={styles.title} style={{ color: colorName }}>
          {nameHtml.length > 0 ? nameHtml : name}
        </h2>
      </div>
      <div className={`${styles.body}`} style={{ background: colorBackgroundParametrs, color: colorParametrs }}>
        <div className={styles.bodyElement}>
          <span>Пол</span>
          <span>{gender}</span>
        </div>
        <div className={styles.bodyElement}>
          <span>Раса</span>
          <span>{species}</span>
        </div>
        <div className={styles.bodyElement}>
          <span>Сторона</span>
          <span>{side}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
