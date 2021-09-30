import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Real API URL is set in the backend
const bux_api = axios.create({ 
  baseURL: 'http://localhost:3000'
})

// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = bux_api
})

export { axios, bux_api }