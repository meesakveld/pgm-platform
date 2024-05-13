/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--color-background))',
				black: 'rgb(var(--color-black))',
				blue: 'rgb(var(--color-blue))',
				red: 'rgb(var(--color-red))',
				pink: 'rgb(var(--color-pink))',
			}
		},
		fontFamily: {
			manuka: ['Manuka'],
			firaCode: ['Fira Code'],
			shareTechMono: ['Share Tech Mono']
		}
	},
	plugins: [],
}
