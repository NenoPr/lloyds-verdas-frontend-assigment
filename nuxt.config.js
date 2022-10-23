// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  target: 'static',
  router: {
    base: '/lloyds-verdas-frontend-assigment/',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/user/:userid',
        components: {
          users: resolve(__user, 'pages/users'),
          eng: resolve(__en, 'pages/en')
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
