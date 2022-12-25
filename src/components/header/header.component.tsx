import Logo from '../Logo/Logo.component'
import { NavLinkTo, NavContainer, NavElement, HeaderContainer } from './Header.styles'

const Header = (): JSX.Element => {
	return (
		<HeaderContainer>
			<Logo />
			<NavContainer>
				<NavElement>
					<NavLinkTo to="/">Главная</NavLinkTo>
				</NavElement>
				<NavElement>
					<NavLinkTo to="/character">Персонажи</NavLinkTo>
				</NavElement>
				<NavElement>
					<NavLinkTo to="/ui">UI</NavLinkTo>
				</NavElement>
			</NavContainer>
		</HeaderContainer>
	)
}

export default Header
