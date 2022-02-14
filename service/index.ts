import ZbRequest from './request'
import { BASE_URl, TIME_OUT } from './request/config'

export default new ZbRequest({
  baseURL: BASE_URl,
  timeout: TIME_OUT
})
