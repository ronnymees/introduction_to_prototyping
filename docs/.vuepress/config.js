module.exports = {
  title: 'Course Full Stack Development - Professional Bachelor Elektronica-ICT',
  description: 'Course Full Stack Development',
  themeConfig: {
    logo: '/files/afbeelding1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' },
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/fullstackdevelopment_eoict',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
      {
        title: 'Introduction',
        children: [
          '/01_history_and_evolution/README.md',
          '/02_tcp_ip_stack/README.md',
          '/03_client_server_model/README.md',
          '/04_web_protocols/README.md',
          '/05_internet_of_things/README.md',
        ]
      },{
        title: 'Frontend Webdesign',
        children: [
          '/21_development_tools/README.md',
          '/22_webstructure_html/README.md',
          '/23_webstyling_css/README.md',
          '/24_responsive_styling/README.md',
          '/25_online_styles/README.md',
          '/26_deploy_website/README.md',
        ]
      },{
        title: 'Frontend Scripting',
        children: [
          '/31_communication/README.md',
          '/32_frontend_scripting_js/README.md',
          '/33_typescript/README.md',
        ]
      },{
        title: 'Backend databases',
        children: [
          '/41_databases/README.md',
          '/42_setup_mysql/README.md',
          '/43_setup_mariadb/README.md',
          '/44_install_phpmyadmin/README.md',
          '/45_create_db_user/README.md',
          '/46_crud_db/README.md',
        ]
      },{
        title: 'Backend Scripting',
        children: [
          '/51_intro_express/README.md',
          '/52_rest_api_crud/README.md',
          '/53_rest_api_fileupload/README.md',
        ]
      },{
        title: 'Frontend Development',
        children: [
          '/61_frontend_vue/README.md',
          '/62_axios/README.md',
          '/63_vuetify/README.md',
        ]
      },{
        title: 'Security',
        children: [
          '/71_secure_connection/README.md',
          '/72_login/README.md',
        ]
      }
    ]    
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      selector: 'img',
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
	  ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],    
  ],  
}
