import Store from 'redux-zero/interfaces/Store';

import { IndexState } from '../state';
import { mapToEmptyProps } from '../../../../utils';



const actionsObj =  {
  // 获取登录用户数据
  getUserInfo: async () => {

  },
  // 登录
  login: async () => {

  }
};

const actions = (store: Store<IndexState>) => actionsObj;
export type ConnectProps<
  MapToProps extends (...args: any) => any = typeof mapToEmptyProps,
  Props = {}
> = ReturnType<MapToProps> & Props;

export { actions };
