export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],

  unocss: {
    attributify: true,
    icons: true,
    components: false,
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },

  compatibilityDate: '2024-07-10',
})