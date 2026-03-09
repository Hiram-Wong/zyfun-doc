import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'
import { ImagePreviewPlugin } from 'vitepress-plugin-image-preview'

import { zhCnConfig } from './config/zh-CN'
import { enUsConfig } from './config/en-US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'zyfun',
  description: 'video client',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {
        async: 'true',
        src: 'https://umami.catni.cn/script.js',
        'data-website-id': '4ab85a89-6c6e-4e0c-801b-e8e2f0055384'
      }
    ],
    [
      'script',
      {
        async: 'true',
        src: 'https://api.wukongtongji.com/c?_=788207778918686720'
      }
    ]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      ...zhCnConfig
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      ...enUsConfig
    }
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: 'zyfun',
    search: {
      provider: 'local'
    },
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hiram-Wong/zyfun' },
      { icon: 'telegram', link: 'https://t.me/+IOovrYLP7gYwYmNl' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 zyfun Team.'
    }
  },
  vite: {
    plugins: [groupIconVitePlugin(), ImagePreviewPlugin()]
  }
})
