import Axios, { AxiosPromise }  from 'axios';


export const axios = Axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 180000, // 请求的超时时间
  withCredentials: false, // 允许携带cookie
  transformRequest: [data => JSON.stringify(data)],
});

// 添加一个请求拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error));

// 添加一个响应拦截器
axios.interceptors.response.use(response => response.data, (error) => Promise.reject(error));


export interface BlogResponse<T> {
  retcode: number;
  data?: T;
}
export function RequestUtil<T=any>(
  promise: AxiosPromise<BlogResponse<T>>,
  url: string,
  allowRetCodes?: number[]
): Promise<T>{
  return new Promise((resolve, reject) => {
    promise.then(({ data: { retcode, data } }) => {
      let result = data;
      return resolve(result as T);
    }).catch(reject);
  });
}

export function get<T>(url: string, query?: object) {
  return RequestUtil(Axios.get(url, query), url);
}

export function post<T>(url: string, body: object) {
  return RequestUtil(Axios.post(url, body), url);
}

export function put<T>(url: string, body: object) {
  return RequestUtil(Axios.put(url, body), url);
}

export function del<T>(url: string, body: object) {
  return RequestUtil(Axios.delete(url, body), url);
}


