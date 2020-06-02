
export default {
  mode: 'universal',
  head: {
    title: 'BlogGo Project || Erdal Yenigül',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BlogGo: son haberler!' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500;1,600;1,700&display=swap' }
    ]
  },
  loading: { color: '#000', height:'10px' },
  css: [
    '@/assets/css/main.scss',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '@/plugins/firebase.js'},
    { src: "~plugins/vue-quill-editor.js", ssr: false },
    '~/plugins/fontawesome.js'
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
