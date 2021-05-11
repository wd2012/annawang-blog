import { axios } from './axios';
import { UserCount } from '../types';


import { del, get, post } from './axios';
import * as apiConstant from './apiConstant';

export function test(id: '') {
  return get<any>(apiConstant.TestApi, { id });
}

// 获取登录用户信息
export function getUserInfo() {

}

// 登录
export const Login = function (params: UserCount) {
  console.log('params=====', params);
  return post(apiConstant.Login, {
    // 加密jwt
    ...params
  });
}