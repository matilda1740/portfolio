import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--bg)',
				surface: 'var(--surface)',
				foreground: 'var(--text)',
				muted: 'var(--text-muted)',
				border: 'var(--border)',
				'border-strong': 'var(--border-strong)',
				accent: 'var(--accent)',
				'accent-hover': 'var(--accent-hover)',
				'accent-soft': 'var(--accent-soft)',
				'on-accent': 'var(--on-accent)',
				focus: 'var(--focus)',
				success: 'var(--success)',
				error: 'var(--error)',
			},
			fontFamily: {
				heading: ['Fraunces', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [typography],
};
