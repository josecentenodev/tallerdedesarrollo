import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-primary': {
					'50': '#edfbff',
					'100': '#d6f5ff',
					'200': '#b5efff',
					'300': '#83e8ff',
					'400': '#48d8ff',
					'500': '#1ebcff',
					'600': '#06a0ff',
					'700': '#007ee5',
					'800': '#086ac5',
					'900': '#0d5b9b',
					'950': '#0e375d',
				},
				'blue-dark': {
					'50': '#f3f7fc',
					'100': '#e5eff9',
					'200': '#c6dff1',
					'300': '#93c5e6',
					'400': '#59a6d7',
					'500': '#348cc3',
					'600': '#246fa5',
					'700': '#1e5986',
					'800': '#1d4c6f',
					'900': '#1d415d',
					'950': '#13293d',
				},
				'ghost-white': {
					'50': '#f3f5fa',
					'100': '#eceef6',
					'200': '#d9ddec',
					'300': '#c1c5e0',
					'400': '#a7aad2',
					'500': '#9191c3',
					'600': '#7d79b2',
					'700': '#6c679b',
					'800': '#58557e',
					'900': '#4b4966',
					'950': '#2c2a3c',
				},
				'imperial-red': {
					'50': '#fff1f2',
					'100': '#ffe0e2',
					'200': '#ffc6c9',
					'300': '#ff9fa4',
					'400': '#ff676f',
					'500': '#fb3640',
					'600': '#e91924',
					'700': '#c4111a',
					'800': '#a21219',
					'900': '#86161c',
					'950': '#490609',
				},
				'spring-green': {
					'50': '#edfff2',
					'100': '#d6ffe3',
					'200': '#afffc8',
					'300': '#71ffa0',
					'400': '#27fb6b',
					'500': '#02e54c',
					'600': '#00bf3b',
					'700': '#009531',
					'800': '#06752b',
					'900': '#085f26',
					'950': '#003613',
				},
			}
		},
	},
	plugins: [animations],
}
