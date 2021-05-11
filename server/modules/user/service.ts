import { UserData } from '../../types';
import { UserDao } from './entity/user.dao';

// 根据id获取用户信息
export async function getUserInfoById(param: string) {
  const data = UserDao.getUserInfoByUid(param);
    return data;
}
