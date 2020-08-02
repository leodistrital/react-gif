/** @format */

export const getGifs = async (categoria) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		categoria
	)}&limit=5&api_key=caaoPy4odLlSnGVLHNhSXB6kkPf8ow9y`;
	const respuesta = await fetch(url);
	const { data } = await respuesta.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});
	// console.log(gifs);
	// setimages(gifs);
	return gifs;
};
