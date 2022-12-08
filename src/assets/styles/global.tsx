import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body { 
		margin: 0;
		font-family: lora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 0px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: #000;
		color: #fff;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	* {
		box-sizing: border-box;
	}
`
export default GlobalStyle
