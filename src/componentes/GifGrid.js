/** @format */

import React, { useState, useEffect } from "react";
import { useFectchGif } from "../hooks/useFectchGif";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifts";

export const GifGrid = ({ categoria }) => {
	const [images, setimages] = useState([]);
	const { data: imgs, loading } = useFectchGif(categoria);
	// console.log(loading);

	return (
		<div className="card-grid">
			{loading && <p>cargando..</p>}
			<h3>{categoria}</h3>

			{imgs.map((img) => (
				<GifGridItem {...img} key={img.id} />
			))}
		</div>
	);
};
