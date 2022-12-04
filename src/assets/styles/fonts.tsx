import { createGlobalStyle } from 'styled-components'
import LoraRegular from '../fonts/Lora-Regular.woff'
import LoraBold from '../fonts/Lora-Bold.woff'

const FontStyle = createGlobalStyle`
	@font-face {
		font-family: lora;
		font-weight: 400;
		font-style: normal;
		src: url(${LoraRegular}) format("woff");
		font-display: swap;
	}
	@font-face {
		font-family: lora;
		font-weight: 700;
		font-style: normal;
		src: url(${LoraBold}) format("woff");
		font-display: swap;
	}
`
export default FontStyle
