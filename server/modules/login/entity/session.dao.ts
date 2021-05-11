import connection from '../../../utils/db';
import { SessionModel } from './session.model';
export class SessionDao {
  // 获取用户id信息
  static async getUserIdBySession(params: string) {
    const template = connection.getRepository<SessionModel>(SessionModel);
    const data = await template.find({ where: { sessionId: params } });
    return data[0];
  }

  // 新增session信息
  static async addUserSession(params: SessionModel) {
    const template = connection.getRepository<SessionModel>(SessionModel);
    return await template.insert(params);
  }
}