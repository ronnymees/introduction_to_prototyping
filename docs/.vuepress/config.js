import { containerPlugin } from '@vuepress/plugin-container'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

module.exports = {
  lang: 'en-US',
  title: 'Course Introduction to Prototyping - Professional Bachelor Elektronica-ICT',
  description: 'Course Introduction to Prototyping',
  
  theme: defaultTheme({
    logo: '/files/afbeelding1.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Organization', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' }
    ],
    sidebar: [
      {
        text: 'Prototyping Tools',
        collapsible: true,
        children: [
          '/01_prototyping_tools/README.md',          
        ]
      },{
        text: 'Introduction',
        collapsible: true,
        children: [
          '/11_introduction/README.md',          
        ]
      }
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/fullstackdevelopment_eoict',
    docsDir: 'docs',
    docsBranch: 'master',
  }),
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}