import styled, { css, keyframes } from 'styled-components'

interface LoadableImageContainerProps {
	loading: boolean
	background?: boolean
}

const load = keyframes`
  from {
      left: -150px;
  }
  to   {
      left: 100%;
  }
`
const LoadableImageContainerLoading = `
  &::before {
		animation: none;
	}
`
export const LoadableImageStyle = styled.img`
	opacity: 0;
	max-width: 100%;
	display: block;
	transition: opacity 0.3s ease-in-out;
`
const LoadableImageContainerBackground = `
  width:100%;
  left:0;
  top:0;
  height:100%;
  position:absolute;
  ${LoadableImageStyle} {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const LoadableImageContainer = styled.div<LoadableImageContainerProps>`
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	&::before {
		content: '';
		display: block;
		position: absolute;
		left: -150px;
		top: 0;
		height: 100%;
		width: 150px;
		background: linear-gradient(to right, transparent 0%, #26b3ff17 50%, transparent 100%);
		animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	&.containerLoaded::before {
		animation: none;
	}

	${({ loading }) => loading && LoadableImageContainerLoading}
	${({ loading }) =>
		loading &&
		css`
			${LoadableImageStyle} {
				opacity: 1;
			}
		`}
  
  ${({ background }) => (background ?? false) && LoadableImageContainerBackground}
`
