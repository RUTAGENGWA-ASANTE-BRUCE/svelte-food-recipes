/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  console.log(param)
    return /^\d+$/.test(param);
}