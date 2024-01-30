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
        text: 'Prototyping',
        collapsible: true,
        children: [
          '/11_introduction/README.md',
          '/12_prototypes-for-physical-products/README.md',
          '/13_prototypes-for-digital-products/README.md',
          '/14_testing-with-prototypes/README.md',
        ]
      }
      ,{
        text: 'Modelmaking',
        collapsible: true,
        children: [
          '/21_introduction-to-3dprinting/README.md',          
          '/22_3dprinters-at-our-disposal/README.md',          
          '/23_lasercutting-engraving/README.md',          
          '/24_lasercutters-at-our-disposal/README.md',  
          '/25_tools-and-safety/README.md',          
        ]
      },{
        text: 'Computer Aided Design',
        collapsible: true,
        children: [
          '/31_introduction-to-cad/README.md',          
          '/32_part-modeling/README.md',
          '/33_assembly-modeling/README.md',
          '/34_export-to-machine/README.md',
        ]
      },{
        text: 'Software',
        collapsible: true,
        children: [
          '/41_fusion360/README.md',          
          '/42_cura/README.md',
          //'/43_??/README.md',
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