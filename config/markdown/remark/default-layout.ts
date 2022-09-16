import type { RemarkPlugin } from '@astrojs/markdown-remark/dist/types'

// Default layout for .md (can be overwritten in the frontmatter)
const plugin: RemarkPlugin = () => (_, file) => {
	const frontmatter: Record<string, any> = (file.data.astro as any).frontmatter
	frontmatter.layout = '@layouts/BlogLayout.astro'
}

export default plugin
