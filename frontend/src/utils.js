export const shuffle = (array) => {
	var m = array.length,
		t,
		i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
};

export const cacheImages = async (srcArray) => {
	const promises = await srcArray.map((src) => {
		return new Promise(function (resolve, reject) {
			const img = new Image();
			img.src = src;
			img.onload = resolve();
			img.onerror = reject();
		});
	});
	await Promise.all(promises);
};
