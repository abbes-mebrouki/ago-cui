import React from "react"
import "./button.css"

interface ButtonProps {
	label: string
}

const Button = ({ label }: ButtonProps) => {
	return (
		<button
			className="btn"
		>
			{label}
		</button>
	)
}

export default Button
