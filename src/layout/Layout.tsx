import { NavLink, Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {
	return (
		<>
			<header>
				<NavLink to="ui">UI</NavLink>
				<br></br>
				<NavLink to="character">Персонажи</NavLink>
				<br></br>
				<NavLink to="/">Главная</NavLink>
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	)
}

export default Layout
