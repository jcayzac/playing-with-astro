import type { AstroUserConfig } from 'astro/config'
import { defineConfig } from 'astro/config'
import { integrations } from './integrations'
import { markdown } from './markdown'
import { style } from './style'

// https://astro.build/config
export const config = defineConfig({
	integrations,
	markdown,
	outDir: './build',
	output: 'static',
	publicDir: './static',
	site: `https://coronal.cloud`,
	style,
} as AstroUserConfig)

