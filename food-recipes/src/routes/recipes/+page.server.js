export const load = async () => {
	const environment_variables = import.meta.env;
	const url = `https://api.spoonacular.com/recipes/complexSearch?number=50&apiKey=${environment_variables.VITE_SPOONACULAR_API_KEY}`;
	console.log(url);
	const res = await fetch(url);
	const { results } = await res.json();
	return {
		url,
		recipes: results
	};
};
