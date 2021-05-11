import connection from '../../../utils/db';
import { UserModel } from './user.model';
import { UserCount } from '../../../types';
export class UserDao {
  // 获取用户信息
  static async getUserInfoByUid(params: string) {
    try {
      const template = connection.getRepository<UserModel>(UserModel);
      const data = await template.find({ where: { userId: params } });
      return data[0];
    } catch(error) {
      throw new Error(error);
    }
  }

  // 根据用户名和密码判断用户是否注册
  static async isUserExists(params: UserCount) {
    try {
      const template = connection.getRepository<UserModel>(UserModel);
      console.log('params===', params);
      const data = await template.find({ where: { userName: params.userName } });
      if (!data[0]) throw new Error('用户不存在！');
      const { userPassword } = params;
      if (userPassword !== params.userPassword) {
        throw new Error('密码错误！');
      }
      return data[0];
    } catch(error) {
      throw new Error(error);
    }
  }

}