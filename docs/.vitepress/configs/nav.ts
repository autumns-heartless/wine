import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '白酒展厅', link: '/wine/' },
  { text: '关于我', link: '/me/', activeMatch: '^/me/' },
]
