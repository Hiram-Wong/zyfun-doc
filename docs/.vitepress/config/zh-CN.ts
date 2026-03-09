export const META_URL = 'https://zy.catni.cn'
export const META_TITLE = 'zyfun'
export const META_DESCRIPTION =
  'zyfun是一款免费、极简、全能的跨平台影音管家, 一站式管理 T1-T4 全类型资源，内置多核播放器随心切换。独家老板键，一键隐身摸鱼无忧。用观影发现世界！'

export const zhCnConfig = {
  description: META_DESCRIPTION,
  head: [],
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: '基于AGPL-3.0开源许可协议',
      copyright: 'Copyright © 2024 zyfun Team'
    }
  }
}

function nav() {
  return [
    { text: '首页', link: '/zh-CN/' },
    { text: '指南', link: '/zh-CN/guide/introduction' },
    { text: '赞助', link: '/zh-CN/sponsor/' },
    { text: '历史版本', link: 'https://github.com/Hiram-Wong/zyfun/releases' }
  ]
}

function sidebar() {
  return [
    {
      text: '指南',
      collapsed: false,
      base: '/zh-CN/guide/',
      items: [
        { text: '软件介绍', link: 'introduction' },
        { text: '用户须知', link: 'disclaimer' },
        { text: '使用说明', link: 'usage' },
        { text: '系统投屏', link: 'cast-screen' },
        { text: '软件数据', link: 'data' }
      ]
    },
    {
      text: '写源',
      collapsed: false,
      base: '/zh-CN/source/',
      items: [
        { text: '写源语法', link: 'grammar' },
        { text: '写源工具', link: 'ide' },
        { text: '静态筛选', link: 'sift' },
        { text: '数据爬虫', link: 'spider' },
        { text: '常见技巧', link: 'skill' }
      ]
    },
    {
      text: '开发',
      collapsed: false,
      base: '/zh-CN/dev/',
      items: [
        { text: '贡献代码', link: 'contribute' },
        { text: '后端接口', link: 'api' },
        { text: '数据库', link: 'database' },
        { text: '插件中心', link: 'plugin' },
        { text: '异常排查', link: 'debug' }
      ]
    },
    {
      text: '技术共建',
      collapsed: false,
      base: '/zh-CN/share/',
      items: [
        { text: '嗅探器', link: 'sniffer' },
        { text: '播放器', link: 'player' },
        { text: '去插播', link: 'removeAd' },
        { text: 'VLC', link: 'vlc' },
      ]
    },
    {
      text: '其他分享',
      collapsed: false,
      base: '/zh-CN/other/',
      items: [
        { text: 'hipy搭建', link: 'hipy-build' },
        { text: 'drpyS搭建', link: 'drpyS-build' },
        { text: '同类推荐', link: 'recommend' }
      ]
    }
  ]
}
