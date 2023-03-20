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
          '/01_chapter1/',
          '/02_chapter2/',
          '/03_chapter3/',          
          '/04_chapter4/',          
          '/05_chapter5/',          
          '/06_chapter6/',                
          '/07_chapter7/',              
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
