import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZbRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (config: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (config: any) => any
}

/**
 * 泛型T为了解决请求返回的数据直接提取data等
 */
export interface ZbRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZbRequestInterceptors<T>
  isShowLoading?: boolean
}
