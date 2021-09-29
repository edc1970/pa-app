import { boot } from 'quasar/wrappers'
import axios from 'axios'

const bux_api = axios.create({ 
  baseURL: 'https://api.bux.ph/v1/api/',
  headers: {
    'x-api-key':'7c2c0424662daa7eccdb71f76b7b99ca'
  }
})

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = bux_api
})

export { axios, bux_api }