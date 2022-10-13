import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	let recipeId = params.recipeId;
	const environment_variables = import.meta.env;
	const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${environment_variables.VITE_SPOONACULAR_API_KEY}`;
	const result = await fetch(url)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.log('error===========', err));

	return {
		recipe: result
	};
}
