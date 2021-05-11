
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

import {
  createArticle,
  updateArticle,
  getArticleByType
} from './service';

@Controller('/article')
class Template {
  @Post('create')
  async createArticle(req: Request, res: Response, next: NextFunction) {
    const params = req.body;
    const data = await createArticle(params);
    res.json(data);
  }

  @Post('update')
  async updateArticle(req: Request, res: Response, next: NextFunction) {
    const params = req.body;
    const data = await updateArticle(params);
    res.json(data);
  }

  // @Get('info')
  // async getArticleByType(req: Request, res: Response, next: NextFunction) {
  //   const params = req.params;
  //   const data = await getArticleByType(params);
  //   res.json(data);
  // }
}