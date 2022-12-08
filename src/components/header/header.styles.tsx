import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TextColor } from '../../assets/styles/colors'
import P from '../ui/P/P.component'

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: 10px 33px;
`
export const NavElement = styled(P)``

export const NavLink = styled(Link)`
	color: ${TextColor.secondary};
	transition: 0.3s;
	&:hover {
		color: ${TextColor.white};
	}
`
export const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 129px auto;
	gap: 10px 52px;
	padding: 15px 40px;
`
