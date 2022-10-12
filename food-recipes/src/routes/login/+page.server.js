import { invalid } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		let errors = [];

		if (!email) {
			return invalid(400, { email, emailMissing: true });
		}

		if (!password) {
			return invalid(400, { password, passwordMissing: true });
		}
        // if (!user || user.password !== hash(password)) {
		// 	return invalid(400, { email, incorrect: true });
		// }
		return {
			success: true
		};

	},
	register: async (event) => {
		// TODO register the user
	}
};
