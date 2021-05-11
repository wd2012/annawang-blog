import { Like } from "typeorm";
import connection from '../../../utils/db';
import { ArticleModel } from './article.model';
import { ArticleData } from '../../../types';

export class ArticleDao {
  static async getArticleListByType(type: string) {
    try {
      const template = connection.getRepository<ArticleModel>(ArticleModel);
      const data = template.find({
        where: { 
          acticleType: Like('%'+type+'%') 
        },
        order: {
         articleCreateTime: "DESC"
        }
      });
      return data;
    } catch(error) {
      throw new Error(error.messsage);
    }
  }

  // 根据articleid获取文章内容
  static async getArticleById(articleId: string) {
    try {
      const template = connection.getRepository<ArticleModel>(ArticleModel);
      const data = await template.find({ where: { articleId } });
      return data[0];
    } catch(error) {
      throw new Error(error.messsage);
    }
  }

  static async getArticleByTag(tag: string) {
    try {
      const template = connection.getRepository<ArticleModel>(ArticleModel);
      const data = template.find({
        where: { 
          acticleTag: Like('%'+tag+'%') 
        },
        order: {
         articleCreateTime: "DESC"
        }
      });
      return data;
    } catch(error) {
      throw new Error(error.messsage);
    }
  }

  static async getArticleByUser() {

  }

  // 创建文章
  static async createArticle(params: ArticleData) {
    try {
      const template = connection.getRepository<ArticleModel>(ArticleModel);
      params.articleUpdateTime = new Date();
      params.articleCreateTime = new Date();
      return await template.insert(params);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // 更新文章
  static async updateArticle(params: ArticleData) {
    try {
      const template = connection.getRepository<ArticleModel>(ArticleModel);
      let data: ArticleData = await template.findOne({ where: { articleId: params.articleId } }) as ArticleData;
      const newData = {
        ...data,
        articleUpdateTime: new Date
      };
     
      return await template.save(newData);
    } catch (err) {
      throw new Error(err.message);
    }
  }

}