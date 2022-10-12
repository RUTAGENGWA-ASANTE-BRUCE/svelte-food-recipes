export const load = async () => {
	const environment_variables = import.meta.env;
	const res = await fetch(
		`https://api.spoonacular.com/recipes/complexSearch?number=50&apiKey=${environment_variables.VITE_SPOONACULAR_APIK_KEY}`
	);
	const { results } = await res.json();
	return {
		recipes: results
	};
};
