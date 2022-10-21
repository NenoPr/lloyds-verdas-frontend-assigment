// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  target: 'static',
  router: {
    base: '/lloyds-verdas-frontend-assigment/'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lloyds-verdas-frontend-assigment/'
    : '/'
});
