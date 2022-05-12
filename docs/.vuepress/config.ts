import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'ja-JP',
  title: 'Nipo Plus',
  description: 'クラウド型カスタマイズ可能な日報アプリ。スマホ・PC対応',
  dest: 'docs/',
  plugins: [
    ['@vuepress/register-components', {
      componentsDir: path.resolve(__dirname, './components'),
    }],
  ],

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      { text: 'root', link: '/' },
      { text: 'rule', link: '/rule/' },
      {
        text: 'Group',
        
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      }
    ],
    sidebar: {
      '/rule/': [
        {
          text: 'Guide',
          children: [
            { text: 'りーどめー', link: '/rule/README.md' },
            '/rule/README.md',
            '/rule/one.md'
          ],
        },
      ],
    }
  },
  head: [
    ['meta',{ name:"keywords", content:"クラウド,日報,nipo plus"}],
    ['meta',{ name:"og:title", content:"Nipo Plus-クラウド日報"}],
    ['meta',{ name:"og:description", content:"スマホ・PCからかんたんに日報作成が可能。テンプレートのカスタマイズ・集計・コメントなど完備"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"https://nipo-plus-doc.sndbox.jp"}],
    ['meta',{ name:"og:image", content: '/logo.png' }]
  ]
})
