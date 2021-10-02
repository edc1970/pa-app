import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Real API URL is set in the backend
const bux_api = axios.create({ 
  baseURL: 'https://philsecure-pa-backend.herokuapp.com'
})

const db_api = axios.create({
  baseURL: '/functions'
})

// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = bux_api
})

export { axios, bux_api, db_api }