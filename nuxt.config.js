const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type:'text/css',href:'/css/common.css'},
      { rel: 'stylesheet', type:'text/css',href:'./icon/iconfont.css'},
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_HTML", type: 'text/javascript'},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.0/mhchem.js", type: 'text/javascript'},
      { src: "./icon/iconfont.js", type: 'text/javascript'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    {src:'@/plugins/mathjax',ssr:false},
    {src:'@/plugins/vuescroll',ssr:true},
    {src:'@/plugins/printJs',ssr:false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    prefix: '/api/',
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': { target: 'http://localhost:3000', pathRewrite: {'^/api/': ''} }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }  
  }
}
