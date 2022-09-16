import type { AcceptedPlugin as PostCSSPlugin } from 'postcss'

import autoprefixerPlugin from 'autoprefixer'
export const autoprefixer = autoprefixerPlugin(['> 10%']) as PostCSSPlugin
