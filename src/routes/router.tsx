import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import CharacterPage from './character/character'
import HomePage from './home/home'
import UIPage from './ui/ui'

const Router = (): JSX.Element => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<HomePage />}></Route>
					<Route path="character" element={<CharacterPage />} />
					<Route path="ui" element={<UIPage />} />
				</Route>
			</Routes>
		</>
	)
}
export default Router
