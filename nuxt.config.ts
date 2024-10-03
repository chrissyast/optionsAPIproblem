import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'Budget',
      htmlAttrs: {
        lang: 'en'
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
  },

  build: {
    transpile: ['vuetify'],
  },

  server: {
    port: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   // '~/plugins/mixins.ts',
  //  { src: '~/api/api.js', mode: 'client' },
 //   { src: '~/api/javaApi.js', mode: 'client' }
  ],

  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:8080'
    }
  },

  privateRuntimeConfig: {
    monzoClientSecret: process.env.MONZO_CLIENT_SECRET
  },

  publicRuntimeConfig: {
    monzoClientId: 'oauth2client_0000AGwok902ZB2q0fL6GX',
    monzoRedirectUri: 'http://localhost:5000/tokenCallback'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    //'@nuxtjs/vuetify'
  ],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    server: {
      hmr: {
        port: 3008
      }
    }
  }
  /*
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      treeShake: true
    },
  */
  /*build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },*/,

  compatibilityDate: '2024-09-21',

  nitro: {
    devServer: {
      watch: ['*']
    }
  },

  ssr: {
    noExternal: ['@inertiajs/server',/\.css$/, /\?vue&type=style/, /^vuetify/],
  },
})