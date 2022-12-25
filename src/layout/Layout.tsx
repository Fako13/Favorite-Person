import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.component'
import { LayoutContainer } from './Layout.styles'

const Layout = (): JSX.Element => {
	return (
		<LayoutContainer>
			<Header />
			<main>
				<Outlet />
			</main>
		</LayoutContainer>
	)
}

export default Layout
