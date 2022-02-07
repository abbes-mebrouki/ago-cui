import React from "react"
import CButton from "./c_button"

export interface ButtonProps {
	variant: "contained" | "outlined"
	label: string
}

const Button = ({ variant, label }: ButtonProps) => {
	return (
		// <ThemeProvider theme={MuiTheme}>
			<CButton variant={variant}>{label}</CButton>
		// </ThemeProvider>
	)
}

export default Button
