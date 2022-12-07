import Button from './components/ui/Button/Button.component'
import { BUTTON_COLOR, BUTTON_SIZE } from './components/ui/Button/Button.types'
import H1 from './components/ui/H1/H1.component'
import { H1_SIZE } from './components/ui/H1/H1.types'
import P from './components/ui/P/P.component'

const App = (): JSX.Element => {
	return (
		<div className="">
			<H1 size={H1_SIZE.big}>132</H1>
			<Button color={BUTTON_COLOR.green}>default green</Button>
			<Button>default</Button>
			<Button size={BUTTON_SIZE.large}>large</Button>
			<Button href="asd" size={BUTTON_SIZE.small} color={BUTTON_COLOR.green}>
				small
			</Button>
			<P>123</P>
			<P size={24}>123</P>
		</div>
	)
}

export default App
