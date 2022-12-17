import { LogoLink } from './Logo.styles'
import PngLogo from './logo.png'

const Logo = (): JSX.Element => {
	return (
		<LogoLink to="/">
			<img src={PngLogo}></img>
		</LogoLink>
	)
}

export default Logo
