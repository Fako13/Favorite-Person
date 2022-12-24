import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/Button/Button.component';
import H1 from '@/components/ui/H1/H1.component';
import P from '@/components/ui/P/P.component';

import { BUTTON_SIZE } from '../../ui/Button/Button.types';
import { H1_SIZE } from '../../ui/H1/H1.types';
import Wrapper from '../../ui/Wrapper/Wrapper.component';
import styles from './MainBanner.module.scss';
import Logo from './MainBanner.png';

const MainBanner = (): JSX.Element => (
  <div className={styles.bannerContainer}>
    <Image layout="fill" alt="background" objectFit="cover" src={Logo} />
    <Wrapper size="xl" position="relative">
      <H1 className={styles.title} size={H1_SIZE.big}>
        Найди любимого персонажа <br /> “Гарри Поттера”
      </H1>
      <P className={styles.subTitle} size={24}>
        Вы сможете узнать тип героев, их <br /> способности, сильные стороны и недостатки.
      </P>
      <Link href="/character" passHref>
        <a>
          <Button Size={BUTTON_SIZE.large}>Начать</Button>
        </a>
      </Link>
    </Wrapper>
  </div>
);

export default MainBanner;
