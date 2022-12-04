import H1 from './components/ui/H1/H1.component'
import { H1_CLASSES } from './components/ui/H1/H1.types'

const App = (): JSX.Element => {
	return (
		<div className="">
			<H1 H1Type={H1_CLASSES.big}>132</H1>
		</div>
	)
}

export default App
