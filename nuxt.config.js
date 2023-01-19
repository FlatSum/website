export default {
  target: 'static',

  head: {
    title: '合同会社FlatSum',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  css: [
    "@/assets/css/_variables.scss",
    "@/assets/css/_reset.scss",
    "@/assets/css/_common.scss",
    "@/assets/css/_mixin.scss",
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  },

  router: {
    base: process.env.NODE_ENV === "production" ? PRODUCTION_BASE_PATH : "/",
  }
}
