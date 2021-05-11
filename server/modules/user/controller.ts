import {
  Controller,
  Get,
  Post
} from '../../decorator';
import {
  NextFunction,
  Request,
  Response
} from 'express';
import { getUserInfoById } from './service';

@Controller('/user')
class Template {
  @Get('info')
  async getUserInfoById(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId = '' } = req.query;
      const data = await getUserInfoById(userId as string);
      res.json(data);
    } catch(e) {
      next(e);
    }
  }
}

