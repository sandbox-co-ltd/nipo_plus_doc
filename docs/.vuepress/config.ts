import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'ja-JP',
  title: 'Nipo Plus',
  description: 'クラウド型カスタマイズ可能な日報アプリ。スマホ・PC対応',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
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
