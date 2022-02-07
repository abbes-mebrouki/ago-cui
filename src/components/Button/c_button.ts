import styled, { css } from "styled-components"
import { Button } from "@material-ui/core"

export default styled(Button)`
	${({ variant }) => css`
		&.MuiButtonBase-root {
			border-radius: 99px;
			text-transform: none;
			/* background-color: red; */
		};

		${VariantsStyling(variant)}
	`}
`


const VariantsStyling = (variant = "contained") => {
	switch (variant) {
		case "contained":
			return css`
				background-color: #000;
				color: #fff;
			`
		case "outlined":
			return css`
				background-color: #fff;
				color: #000;
				border: 1px solid #000;
			`
	}
}
