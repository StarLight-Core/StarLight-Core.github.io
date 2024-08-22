import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarLight_Core",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  description: "欢迎来到 StarLight_Core 的使用文档与使用帮助",
  titleTemplate: ':title - StarLight_Core',
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline:{
      label: "页面导航"
    },
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/markdown-examples' },
      { text: '反馈', link: 'https://github.com/Ink-Marks-Studio/StarLight.Core/issues' },
      { text: '墨痕工作室', link: 'https://imstudio.top' },
      { text: 'Nuget', link: 'https://www.nuget.org/packages/StarLight_Core' }
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    editLink: {
      text: '在GitHub上编辑此页',
      pattern: 'https://github.com/StarLight-Core/StarLight-Core.github.io/edit/main/docs/:path',
    },

    footer: {
      message: "所有内容均以 CC BY-NC-SA 4.0 许可协议进行共享",
      copyright: "Copyright © Ink Marks Studio",
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    sidebar: [
      {
        text: '关于',
        items: [
          { text: '介绍', link: '/About/Introduction' },
          { text: '关于', link: '/About/About' },
          { text: '快速开始', link: '/About/QuickStart' }
        ],
      },
      {
        text: '启动器',
        items: [
          { text: '启动器', link: '/Launcher/Launcher' }
        ],
      },
      {
        text: '安装器',
        items: [
          { text: '游戏 安装器', link: '/Installer/Game' },
          { text: 'Fabric 安装器', link: '/Installer/Fabric' },
          { text: 'Forge 安装器', link: '/Installer/Forge' }
        ],
      },
      {
        text: '验证器',
        items: [
          { text: '微软验证器', link: '/Authentication/' },
          { text: '外置验证器', link: '/Authentication/' },
          { text: '离线验证器', link: '/Authentication/' },
          { text: '统一通行证', link: '/Authentication/UnifiedPass' }
        ],
      },
      {
        text: '查找器',
        items: [
          { text: '游戏 搜寻器', link: '/Fetcher/Game' },
          { text: 'Java 搜寻器', link: '/Fetcher/Java' }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ink-Marks-Studio/StarLight.Core' }
    ]
  }
})
