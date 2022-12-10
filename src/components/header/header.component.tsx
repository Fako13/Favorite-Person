import Logo from '../Logo/Logo.component'
import { NavLinkTo, NavContainer, NavElement, HeaderContainer } from './Header.styles'

const Header = (): JSX.Element => {
	return (
		<HeaderContainer>
			<Logo />
			<NavContainer>
				<NavElement>
					<NavLinkTo to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
						Главная
					</NavLinkTo>
				</NavElement>
				<NavElement>
					<NavLinkTo
						to="/character"
						className={({ isActive }) => (isActive ? 'active' : undefined)}
					>
						Персонажи
					</NavLinkTo>
				</NavElement>
				<NavElement>
					<NavLinkTo to="/ui" className={({ isActive }) => (isActive ? 'active' : undefined)}>
						UI
					</NavLinkTo>
				</NavElement>
			</NavContainer>
		</HeaderContainer>
	)
}

export default Header
