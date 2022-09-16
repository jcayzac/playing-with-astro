import type { AstroUserConfig } from 'astro/config'
import defaultLayout from './remark/default-layout'

export const markdown = {
	drafts: import.meta.env.DEV,
	extendDefaultPlugins: true,
	extendPlugins: true,
	remarkPlugins: [
		defaultLayout,
	],
	rehypePlugins: [],
	shikiConfig: {},
} as AstroUserConfig['markdown']
