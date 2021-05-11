
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
import { login } from './service';

@Controller('/login')
export class Template {
  @Post('')
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const templateData = req.body;
      console.log('req.body===', req.body);
      const data = await login(templateData);
      res.json(data);
    } catch(e) {
      console.log('e===', e);
      next(e);
    }
  }
}