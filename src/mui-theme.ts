import { colors } from "@material-ui/core"
import { createTheme } from "@material-ui/core/styles"
import { Overrides as CoreOverrides } from "@material-ui/core/styles/overrides"
import { ComponentsProps as CoreProps } from "@material-ui/core/styles/props"
import { CSSProperties } from "@material-ui/styles"
import { AutocompleteClassKey } from "@material-ui/lab"

import * as theme from "./tokens"

const muiPalette = {
	primary: {
		main: theme.M3SysLightPrimary,
		light: theme.M3SysLightPrimary,
		dark: theme.M3SysDarkPrimary,
	},
	secondary: {
		main: theme.M3SysLightSecondary,
		light: theme.M3SysLightSecondary,
		dark: theme.M3SysDarkSecondary,
	},
	error: {
		main: theme.M3SysLightError,
		light: theme.M3SysLightError,
		dark: theme.M3SysDarkError,
	},
	// background: {
	// 	main: theme.M3SysLightSurface,
	// 	light: theme.M3SysLightSurface,
	// 	dark: theme.M3SysDarkSurface,
	// },
}

const muiTypography = {
	fontFamily: "Titillium Web",
	src: `url(@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&display=swap');
	)`,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
}

const muiOverrides: Overrides = {
	MuiButton: {
		root: {
			textTransform: "none",
			// font: 'normal normal 600 14px/20px Arial',
			borderRadius: 100,
			padding: "8px 24px",
			height: 40,
			maxHeight: 40,
			overflow: "hidden",
      backgroundColor: theme.M3SysLightPrimary,

			"&::after": {
				content: '" "',
				height: "100%",
				width: "100%",
				position: "absolute",
			},

			"& span": {
				zIndex: 1,
			},

			// "&::after": {
			// 	backgroundColor: 'red',
			// 	content: '" "',
			// 	height: "100%",
			// 	width: "100%",
			// 	position: 'absolute',

			// },
			// "& span":{
			// 	zIndex: 1
			// },

			// "&::before": {
			// 	backgroundColor: 'red',
			// }
		},
	},
	MuiTypography: {
		root: {
			lineHeight: "normal!important",
		},
	},
	MuiTextField: {
		root: {
			// '& .MuiInputLabel-filled': {
			// 	color: 'red',
			// 	"&.Mui-focused": {
			// 		fontWeight: theme.MdSysTypescaleLabelMediumWeight,
			// 	},
			// },
			// "& .MuiInputLabel-animated": {
			// 	color: "green",
			// 	"&.Mui-focused": {
			// 		fontWeight: theme.MdSysTypescaleLabelMediumWeight,
			// 	},
			// },
			// "& .MuiInputLabel-root": {
			// 	paddingLeft: "8px",
			// 	// fontWeight: theme.MdSysTypescaleLabelMediumWeight,
			// 	// color: theme.MdSysColorPrimary,
			// 	"&.Mui-focused": {
			// 		fontWeight: theme.MdSysTypescaleLabelMediumWeight,
			// 	},
			// },
			// "& .MuiInputBase-input": {
			// 	padding: "25px 16px 8px",
			// 	borderRadius: 8,
			// 	border: `2px solid ${theme.MdSysColorPrimary}`,
			// 	// border: `2px solid ${theme.MdSysColorOutline}`,
			// 	colors: theme.MdSysColorOnSurface,
			// 	backgroundColor: theme.MdSysColorSurface,
			// },
		},
	},

	// MuiCheckbox: {
	// 	root: {},
	// 	MuiIconButton: {
	// 		borderRadius: 6,
	// 	},
	// },
}

const muiProps: CoreProps = {
	MuiButton: {
		disableRipple: true,
		variant: "contained",
	},
	MuiCheckbox: {
		disableRipple: true,
	},

	MuiTextField: {
		variant: "filled",
		size: "small",
		InputProps: {
			disableUnderline: true,
		},
		// InputLabelProps: {
		// 	shrink: true,
		// },
	},

	MuiBadge: {
		overlap: "circle",
	},
}

interface Overrides extends CoreOverrides {
	// Define additional lab components here as needed....
	MuiAutocomplete?:
		| Partial<
				Record<AutocompleteClassKey, CSSProperties | (() => CSSProperties)>
		  >
		| undefined
}

const MuiTheme = createTheme({
	shadows: ["none"],
	palette: { ...muiPalette },
	overrides: { ...muiOverrides },
	props: { ...muiProps },
	typography: { ...muiTypography },
})

export default MuiTheme
