// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  target: 'static',
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/users/:id',
        components: {
          default: resolve(__user, 'pages/users')
        },
        chunkNames: {
          modal: 'components/modal'
        }
      })
    }
  },
  publicPath: '',
  baseURL: ''
});
