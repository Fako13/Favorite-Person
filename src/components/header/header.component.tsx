import Logo from '../logo/logo.component'
import { NavLink, NavContainer, NavElement, HeaderContainer } from './header.styles'

const Header = (): JSX.Element => {
	return (
		<HeaderContainer>
			<Logo />
			<NavContainer>
				<NavElement>
					<NavLink to="/">Главная</NavLink>
				</NavElement>
				<NavElement>
					<NavLink to="/character">Персонажи</NavLink>
				</NavElement>
				<NavElement>
					<NavLink to="/ui">UI</NavLink>
				</NavElement>
			</NavContainer>
		</HeaderContainer>
	)
}

export default Header
