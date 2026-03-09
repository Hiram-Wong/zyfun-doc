export const META_URL = 'https://zy.catni.cn'
export const META_TITLE = 'zyfun'
export const META_DESCRIPTION =
  'zyfun is a free, minimalist, all-in-one cross-platform audio/video manager, one-stop management of all types of T1-T4 resources, built-in multi-core player switching. Exclusive boss key, one key stealth fish without worry. Discover the world with movie watching!'

export const enUsConfig = {
  description: META_DESCRIPTION,
  head: [],
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: 'Released under the AGPL-3.0 License',
      copyright: 'Copyright © 2024 zyfun Team'
    }
  }
}

function nav() {
  return [
    { text: 'Home', link: '/en-US/' },
    { text: 'Guide', link: '/en-US/guide/introduction' },
    { text: 'Sponsor', link: '/en-US/sponsor/' },
    { text: 'Release', link: 'https://github.com/Hiram-Wong/zyfun/releases' }
  ]
}

function sidebar() {
  return [
    {
      text: 'Guide',
      collapsed: false,
      base: '/en-US/guide/',
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Disclaimer', link: 'disclaimer' },
        { text: 'Usage', link: 'usage' },
        { text: 'Cast', link: 'cast-screen' },
        { text: 'Data', link: 'data' }
      ]
    },
    {
      text: 'Source',
      collapsed: false,
      base: '/en-US/source/',
      items: [
        { text: 'Grammar', link: 'grammar' },
        { text: 'IDE', link: 'ide' },
        { text: 'Sift', link: 'sift' },
        { text: 'Spider', link: 'spider' },
        { text: 'Skill', link: 'skill' }
      ]
    },
    {
      text: 'Dev',
      collapsed: false,
      base: '/en-US/dev/',
      items: [
        { text: 'Contribute', link: 'contribute' },
        { text: 'API', link: 'api' },
        { text: 'Database', link: 'database' },
        { text: 'Plugin', link: 'plugin' },
        { text: 'Debug', link: 'debug' }
      ]
    },
    {
      text: 'Share',
      collapsed: false,
      base: '/en-US/share/',
      items: [
        { text: 'Sniffer', link: 'sniffer' },
        { text: 'Player', link: 'player' },
        { text: 'Remove M3U8 Ad', link: 'removeAd' },
        { text: 'VLC', link: 'vlc' },
      ]
    },
    {
      text: 'Other',
      collapsed: false,
      base: '/en-US/other/',
      items: [
        { text: 'hipy Build', link: 'hipy-build' },
        { text: 'drpyS Build', link: 'drpyS-build' },
        { text: 'Recommend', link: 'recommend' }
      ]
    }
  ]
}
