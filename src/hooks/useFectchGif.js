/** @format */

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFectchGif = (categoria) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(categoria).then((imgs) => {
			// console.log(imgs);
			setstate({
				data: imgs,
				loading: false,
			});
		});
	}, [categoria]);

	getGifs();

	return state;
};
