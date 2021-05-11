import { SessionDao } from './entity/session.dao';
import { SessionData, UserData } from '../../types';
import { UserDao } from '../user/entity/user.dao';

// 根据用户名和密码判断用户是否注册
export async function checkUserInfo(params: UserData) {
  const data = await UserDao.isUserExists(params);
  return data;
}


// 创建session并设置过期时间
export async function createSession() {

}

// 登录
export async function login(params: UserData) {
  const data = await checkUserInfo(params);
  if (data) {
    const { userId, userName } = data;
    return data;
  }
}


// 验证session是否过期

export async function isExpired() {

}  



