import axios from 'axios';
export const request=axios.create({baseURL:'/api/v1',timeout:15000});
request.interceptors.response.use((response)=>response.data,(error)=>Promise.reject(error));
// TODO(API): 接入真实登录后在请求拦截器中注入Token，并统一处理401与业务错误码。
