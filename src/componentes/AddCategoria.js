/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategoria = ({ seteoCategorias }) => {
	const [inputVal, setinputVal] = useState("");

	const handleInputChange = (e) => {
		// console.log(e.target.value);
		setinputVal(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputVal.trim().length > 2) {
			console.log("envento submit", inputVal);
			seteoCategorias((cat) => [inputVal, ...cat]);
			setinputVal("");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputVal} onChange={handleInputChange} />
			</form>
		</>
	);
};

AddCategoria.propTypes = {
	seteoCategorias: PropTypes.func.isRequired,
};
