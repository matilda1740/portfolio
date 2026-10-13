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
				'border-selected': 'var(--color-border-selected)',
				accent: 'var(--accent)',
				'accent-hover': 'var(--accent-hover)',
				'accent-active': 'var(--accent-active)',
				'accent-soft': 'var(--accent-soft)',
				'on-accent': 'var(--on-accent)',
				focus: 'var(--focus)',
				success: 'var(--success)',
				'success-soft': 'var(--color-success-soft)',
				warning: 'var(--color-warning)',
				'warning-soft': 'var(--color-warning-soft)',
				error: 'var(--error)',
				'error-soft': 'var(--color-error-soft)',
				info: 'var(--color-info)',
				'info-soft': 'var(--color-info-soft)',
				blue: 'var(--color-blue)',
				'blue-hover': 'var(--color-blue-hover)',
				'blue-soft': 'var(--color-blue-soft)',
				'page-alt': 'var(--color-page-alt)',
				'surface-subtle': 'var(--color-surface-subtle)',
				'surface-raised': 'var(--color-surface-raised)',
				'surface-selected': 'var(--color-surface-selected)',
				'surface-disabled': 'var(--color-surface-disabled)',
				'text-inverse': 'var(--color-text-inverse)',
				'text-placeholder': 'var(--color-text-placeholder)',
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
