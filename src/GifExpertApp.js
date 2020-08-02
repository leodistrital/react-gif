/** @format */

import React, { useState } from "react";
import { AddCategoria } from "./componentes/AddCategoria";
import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {
	// const categorias = ["one Punch", "Samurai X", "Dragon ball z", "Matrix"];

	// const [categorias, setcategorias] = useState([
	// 	"one Punch",
	// 	"Samurai X",
	// 	"Dragon ball z",
	// 	"Matrix",
	// ]);

	const [categorias, setcategorias] = useState(["Samurai X"]);

	// const handleAdd = () => {
	// 	// return setcategorias([...categorias, "Heman"]);
	// 	setcategorias((cats) => [...cats, "Transformers"]);
	// };

	return (
		<>
			<h2>Gif Expert</h2>
			<AddCategoria seteoCategorias={setcategorias} />
			<hr />

			{/* <button onClick={handleAdd}>Agregar</button> */}
			{/* <ol>
				{categorias.map((categoria) => {
					return <li key={categoria}>{categoria}</li>;
				})}
			</ol> */}
			<ol>
				{categorias.map((categoria) => (
					<GifGrid categoria={categoria} key={categoria} />
				))}
			</ol>
		</>
	);
};
