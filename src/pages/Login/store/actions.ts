import Store from 'redux-zero/interfaces/Store';

import { LoginState } from './state';
import { mapToEmptyProps, promiseWarpper } from '../../../utils';
import * as API from '../../../api';
import { url } from 'node:inspector';
import { UserCount } from '../../../types';



const actionsObj =  {
  // 获取登录用户数据
  getUserInfo: async () => {

  },
  // 登录
  login: async (params: UserCount) => {
    console.log('actions', params);
    const [data, arr] = await promiseWarpper(API.Login(params));
    const url = '';
    return url;
  }
};

const actions = (store: Store<LoginState>) => actionsObj;
export type ConnectProps<
  MapToProps extends (...args: any) => any = typeof mapToEmptyProps,
  Props = {}
> = ReturnType<MapToProps> & Props;

export { actions };
