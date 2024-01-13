import React from "react";

const Button = ({children, style}) => {
	return (
        <button style={style} className="btn" role="button">
		{children}
		</button>
	);
};

export default Button;
