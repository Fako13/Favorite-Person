import Image from 'next/image';

import { Search } from '@/components/base/Search/Search.component';
import Wrapper from '@/components/ui/Wrapper/Wrapper.component';
import { DataCharacters } from '@/services/mocks/Characters';

import CharacterSlider from '../Slider/CharacterSlider.component';
import Bg from './bg.png';
import styles from './CharacterMain.module.scss';

const CharacterMain = (): JSX.Element => (
  <div className={styles.container}>
    <Image layout="fill" alt="background" objectFit="cover" src={Bg} />
    <Wrapper position="relative">
      <Search />
      <CharacterSlider characters={DataCharacters} />
    </Wrapper>
  </div>
);

export default CharacterMain;
