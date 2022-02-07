import { ThemeProvider, StylesProvider } from "@material-ui/core"
import MuiTheme from '../src/mui-theme'

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	(Story) => (
		<StylesProvider injectFirst>
			<ThemeProvider theme={MuiTheme}>
				<Story />
			</ThemeProvider>
		</StylesProvider>
	),
]
