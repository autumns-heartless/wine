import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  /* 茂神的站点导航 */
  {
    title: '茂神的站点导航',
    items: [
      {
        icon: 'https://maomao1996.github.io/mm-notes/icons/femm.png',
        title: '前端日常笔记',
        desc: '日常笔记记录（零零散散啥都记系列）',
        link: 'https://github.com/maomao1996/daily-notes',
      },
      {
        icon: 'https://maomao1996.github.io/mm-notes/icons/femm.png',
        title: '前端思维导图',
        desc: '用思维导图的方式总结个人所学知识',
        link: 'https://mindmap.fe-mm.com',
      },
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: 'Qwerty Learner',
        desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
        link: 'https://qwerty.fe-mm.com',
      },
      {
        icon: 'https://maomao1996.github.io/mm-notes/icons/femm.png',
        title: 'mmPlayer',
        desc: 'mmPlayer 在线音乐播放器',
        link: 'https://netease-music.fe-mm.com',
      },
    ],
  }
]
