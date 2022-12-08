import { NavLink, Outlet } from 'react-router-dom'
import Header from '../components/header/header.component'

const Layout = (): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	)
}

export default Layout
