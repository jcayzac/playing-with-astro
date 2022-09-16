import type { AstroUserConfig } from 'astro/config'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'

export const integrations: AstroUserConfig["integrations"] = [
  image(),
  mdx(),
  partytown({}),
  prefetch(),
  sitemap(),
]
