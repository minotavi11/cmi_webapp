// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-auth-utils',
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
  nitro: {
    experimental: {
      database: true,
    },
    database: {
      default: {
        connector: "postgresql",
        options: {
          url: "postgresql://minotaurthegreat11:adabobby2003@localhost:5432/cmi_webapp",
        },
      },
    },
  },
  auth: {
    hash: {
      scrypt: {
        // See https://github.com/adonisjs/hash/blob/94637029cd526783ac0a763ec581306d98db2036/src/types.ts#L144
      },
    },
  },
})