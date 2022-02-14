import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZbRequestConfig, ZbRequestInterceptors } from './type'

export default class ZbRequest {
  instance: AxiosInstance
  interceptors?: ZbRequestInterceptors
  isShowLoading?: boolean
  constructor(config: ZbRequestConfig) {
    this.isShowLoading = config.isShowLoading ?? false
    this.instance = axios.create()
    this.interceptors = config.interceptors

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: ZbRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: ZbRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: ZbRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}
