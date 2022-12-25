import { LogoStyle } from './Logo.styles'
import PngLogo from './logo.png'

const Logo = (): JSX.Element => {
	return (
		<LogoStyle to="/">
			<img src={PngLogo}></img>
		</LogoStyle>
	)
}

export default Logo
