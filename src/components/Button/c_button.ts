import styled, { css } from "styled-components"
import { Button } from "@material-ui/core"
import * as theme from "../../tokens"

export default styled(Button)`
	${({ variant }) => css`
		&.MuiButtonBase-root {
			border-radius: 99px;
			text-transform: none;
			/* background-color: red; */
		}

		${VariantsStyling(variant)}
	`}
`

const VariantsStyling = (variant = "contained") => {
	switch (variant) {
		case "contained":
			return css`
				background-color: ${theme.M3SysLightPrimary};
				color: ${theme.M3SysLightOnPrimary};
				

				${HoverStyling(
					theme.M3SysLightPrimary,
					theme.M3ReadOnlyLightOnPrimaryOpacity008
				)}
			`
		case "outlined":
			return css`
				background-color: ${theme.M3SysLightSurface};
				color: ${theme.M3SysLightPrimary};
				border: 1px solid ${theme.M3SysLightOutline};

				${HoverStyling(
					theme.M3SysLightSurface,
					theme.M3ReadOnlyLightPrimaryOpacity008
				)}
			`
	}
}

const HoverStyling = (originalColor: string, hoverColor: string) => css`
	&:hover::after {
		background-color: ${hoverColor};
	}
	&:hover {
		background-color: ${originalColor};
	}
`
