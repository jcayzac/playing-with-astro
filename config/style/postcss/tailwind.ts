import lineClamp from '@tailwindcss/line-clamp'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import type { AcceptedPlugin as PostCSSPlugin } from 'postcss'
import tailwindPlugin from 'tailwindcss'
import type { Config } from 'tailwindcss'
import type DefaultTheme from 'tailwindcss/defaultTheme'
import resolveConfig from 'tailwindcss/resolveConfig'
type Theme = typeof DefaultTheme

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme: Theme) => ({
				DEFAULT: {
					css: {
						// See https://tailwindcss.com/docs/typography-plugin#customizing-the-css
						// See https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
						// Prefer changing `--tw-prose-*` values!
					},
				},
			}),
			lineClamp: (theme: Theme) => ({
				// See https://github.com/tailwindlabs/tailwindcss-line-clamp#configuration
			}),
		},
	},
	plugins: [
		// Official plugins
		typography,
		lineClamp,

		// Non-offical plugins
		daisyui,
	],
	daisyui: {
		rtl: false,
	},
}

export const tailwind = tailwindPlugin(resolveConfig(config)) as PostCSSPlugin
