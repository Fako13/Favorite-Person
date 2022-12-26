import Button from '@/components/ui/Button/Button.component';
import { BUTTON_COLOR, BUTTON_SIZE } from '@/components/ui/Button/Button.types';
import H1 from '@/components/ui/H1/H1.component';
import { H1_SIZE } from '@/components/ui/H1/H1.types';
import P from '@/components/ui/P/P.component';
import Wrapper from '@/components/ui/Wrapper/Wrapper.component';

const UIPage = (): JSX.Element => (
  <Wrapper>
    <H1 size={H1_SIZE.big}>Найди любимого персонажа big</H1>
    <H1>Найди любимого персонажа default</H1>
    <P>Найди любимого персонажа default</P>
    <P size={24}>Найди любимого персонажа 24</P>
    <P size={20}>Найди любимого персонажа 20</P>
    <P size={18}>Найди любимого персонажа 18</P>
    <P size={16}>Найди любимого персонажа 16</P>
    <P size={14}>Найди любимого персонажа 14</P>
    <P size={9}>Найди любимого персонажа 9</P>
    <Button Color={BUTTON_COLOR.green}>green</Button>
    <Button>default</Button>
    <Button Size={BUTTON_SIZE.large}>large</Button>
  </Wrapper>
);

export default UIPage;
