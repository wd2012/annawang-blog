import { axios } from './axios';


import { del, get, post } from './axios';
import * as apiConstant from './apiConstant';

export function test(id: '') {
  return get<any>(apiConstant.TestApi, { id });
}