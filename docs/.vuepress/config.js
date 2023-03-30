import { containerPlugin } from '@vuepress/plugin-container'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

module.exports = {
  lang: 'en-US',
  title: 'Course Full Stack Development - Professional Bachelor Elektronica-ICT',
  description: 'Course Full Stack Development',
  
  theme: defaultTheme({
    logo: '/files/afbeelding1.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        children: [
          '/11_history_and_evolution/README.md',
          '/12_tcp_ip_stack/README.md',
          '/13_client_server_model/README.md',
          '/14_web_protocols/README.md',
          '/15_internet_of_things/README.md',
        ]
      },{
        text: 'Frontend Webdesign',
        children: [
          '/21_development_tools/README.md',
          '/22_webstructure_html/README.md',
          '/23_webstyling_css/README.md',
          '/24_responsive_styling/README.md',
          '/25_online_styles/README.md',
          '/26_deploy_website/README.md',
        ]
      },{
        text: 'Frontend Scripting',
        children: [
          '/31_communication/README.md',
          '/32_frontend_scripting_js/README.md',
          '/33_typescript/README.md',
        ]
      },{
        text: 'Backend databases',
        children: [
          '/41_databases/README.md',
          '/42_setup_mysql/README.md',
          '/43_setup_mariadb/README.md',
          '/44_install_phpmyadmin/README.md',
          '/45_create_db_user/README.md',
          '/46_crud_db/README.md',
        ]
      },{
        text: 'Backend Scripting',
        children: [
          '/51_intro_express/README.md',
          '/52_rest_api_crud/README.md',
          '/53_rest_api_fileupload/README.md',
        ]
      },{
        text: 'Frontend Development',
        children: [
          '/61_frontend_vue/README.md',
          '/62_axios/README.md',
          '/63_vuetify/README.md',
        ]
      },{
        text: 'Security',
        children: [
          '/71_secure_connection/README.md',
          '/72_login/README.md',
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