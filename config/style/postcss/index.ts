import type { AcceptedPlugin as PostCSSPlugin } from 'postcss'
import { autoprefixer } from './autoprefixer'
import { tailwind } from './tailwind'

type PostCSSConfig = {
	plugins: PostCSSPlugin[]
}

export const postcss: PostCSSConfig = {
	plugins: [
		tailwind,
		autoprefixer,
	],
}
