import { containerPlugin } from '@vuepress/plugin-container'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  lang: 'en-US',
  title: 'Introduction to Prototyping',
  description: 'Course Introduction to Prototyping',
  
  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    navbar: [

    ],
    sidebar: [
      {
        text: 'Prototyping',
        children: [
          '/11_introduction/README.md',
          '/12_prototypes-for-physical-products/README.md',
          '/13_prototypes-for-digital-products/README.md',
          '/14_testing-with-prototypes/README.md',
        ]
      },{
        text: 'Modelmaking',
        children: [
          '/21_paper-and-cardboard/README.md',
          '/22_foamcore/README.md',          
          '/23_foam/README.md',
          '/24_3dprinting/README.md',          
          '/25_lasercutting-engraving/README.md',                    
        ]
      },{
        text: 'Prototyping Lab',
        children: [
          '/31_health-and-safety/README.md',
          '/32_tools-and-workspace/README.md',          
          '/33_3dprinters-at-our-disposal/README.md',          
          '/34_lasercutters-at-our-disposal/README.md',            
        ]
      },{
        text: 'Computer Aided Design',
        children: [
          '/41_introduction-to-cad/README.md',          
          '/42_part-modeling/README.md',
          '/43_assembly-modeling/README.md',
          '/44_drawing/README.md',
        ]
      },{
        text: 'Software',
        children: [
          '/51_fusion360/README.md',          
          '/52_cura/README.md',          
          '/53_bambustudio/README.md',          
        ]
      }
    ],
    sidebarDepth: 0,
    smoothScroll: true
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
  bundler: viteBundler()
}