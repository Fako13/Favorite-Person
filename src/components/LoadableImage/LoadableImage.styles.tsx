import styled, { keyframes } from 'styled-components'

const load = keyframes`
  from {
      left: -150px;
  }
  to   {
      left: 100%;
  }
`

export const LoadableImageContainer = styled.div`
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
`

export const LoadableImageStyle = styled.img`
	opacity: 0;
	transition: opacity 0.3s ease-in-out;

	&.imageLoaded {
		opacity: 1;
	}
`
