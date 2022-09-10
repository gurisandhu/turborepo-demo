import * as React from "react";

type Prop = {
	color: string;
};

export const Button = ({ color }: Prop) => {
	return (
		<button type="button" style={{ backgroundColor: color }}>
			Boop
		</button>
	);
};
