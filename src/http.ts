import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Env } from '@/types/env'
// axios實例
const service = axios.create({
  baseURL:import.meta.env.VITE_APP_API_BASE_URL_DEV?.toString(),
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000 // 超时时间
});
// 请求攔截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let env = JSON.parse(sessionStorage.getItem('env') as string)
    if(env===Env.QA){
      config.baseURL = import.meta.env.VITE_APP_API_BASE_URL_QA?.toString()
    }else if(env===Env.DEV){
      config.baseURL = import.meta.env.VITE_APP_API_BASE_URL_DEV?.toString()
    }
    return config;
  },
  (err: any) => {
    Promise.reject(err);
  }
);
// 回應攔截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: any) => {
    let errMsg = '';
    if (err && err.response.status) {
      switch (err.response.status) {
        case 403:
          errMsg = '拒絕訪問';
          break;
        case 404:
          errMsg = "客戶端錯誤"
          break;
        case 408:
          errMsg = '請求超時';
          break;
        case 500:
          errMsg = 'server內部錯誤';
          break;
        case 501:
          errMsg = 'server未實現';
          break;
        case 503:
          errMsg = '服務不可用';
          break;
        default:
          errMsg = err.response.data.msg;
          break;
      }
    } else {
      errMsg = err;
    }
    console.log(errMsg)
    // Message.error(errMsg);
    return Promise.reject(errMsg);
  }
);
export default (method:string ,url:string ,data = {} , config?:AxiosRequestConfig)=>{
    method = method.toLowerCase()
    switch(method){
        case 'get':
            return service.get(url)
        case 'post':
          return service.post(url,data)
    }
}
// export default service;