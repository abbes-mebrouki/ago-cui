import React from "react"

interface ButtonProps {
	label: string
}

const Button = ({ label }: ButtonProps) => {
	return (
		<button
			style={{
				color: "cyan",
				backgroundColor: "#222",
				padding: "10px 24px",
				borderRadius: 16,
				outlineColor: "none",
				outline: "none",
			}}
		>
			{label}
		</button>
	)
}

export default Button
